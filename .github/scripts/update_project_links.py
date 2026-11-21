
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[2]
README = ROOT / "README.md"

BASE_URL = "https://orvgroup.github.io/mywebapps"

START = "<!-- PROJECT-LINKS-START -->"
END = "<!-- PROJECT-LINKS-END -->"

# Folders that should not appear as projects
EXCLUDED = {
    ".git",
    ".github",
    "assets",
    "node_modules",
    "__pycache__",
}

projects = []

for folder in ROOT.iterdir():
    if (
        folder.is_dir()
        and folder.name not in EXCLUDED
        and (folder / "index.html").is_file()
    ):
        name = folder.name
        url_name = quote(name)
        projects.append(
            f"- [{name}]({BASE_URL}/{url_name}/)"
        )

projects.sort(key=str.lower)

generated = "\n".join(projects) or "_No projects found yet._"

if README.exists():
    content = README.read_text(encoding="utf-8")
else:
    content = "# My Web Apps\n"

if START not in content or END not in content:
    content += f"\n## 🚀 Live Projects\n\n{START}\n{END}\n"

before, remainder = content.split(START, 1)
_, after = remainder.split(END, 1)

updated = f"{before}{START}\n{generated}\n{END}{after}"

README.write_text(updated, encoding="utf-8")

print(f"Updated README with {len(projects)} project(s).")
