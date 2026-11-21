# Installation guide

## Add a workflow

1. Download the chosen `.yml` file from the Automation Store.
2. In your target repository, create `.github/workflows/` if it does not exist.
3. Place the downloaded file in that folder, for example `.github/workflows/python-ci.yml`.
4. Open the workflow and customize branch names, runtime versions, commands and paths.
5. Commit the file. Open the **Actions** tab to inspect the run.

## Permissions and secrets

- Start with the minimum permissions required. The templates declare explicit permissions where practical.
- Never paste tokens, passwords, private keys or API secrets into YAML.
- Store credentials in repository or environment **Actions secrets** and reference them as `${{ secrets.SECRET_NAME }}`.
- Review every third-party action and pin it to a verified full commit SHA before using it in a sensitive production repository.
- Deployment templates may require GitHub Pages to be enabled and the Pages build source to be set to GitHub Actions.

## Common adjustments

- Replace `main` with your default branch if needed.
- Update Python or Node versions to match your project.
- Confirm your package scripts exist (for example `npm test`).
- For static-site deployment, set the correct build command and output directory.

## Troubleshooting

- **Workflow does not start:** check the `on` trigger, branch filters and Actions permissions.
- **Permission denied:** grant only the specific repository permission required by the job.
- **Command not found:** verify the runtime and dependency installation steps.
- **Pages deployment fails:** enable Pages with GitHub Actions as its source and check the deployment environment permissions.
