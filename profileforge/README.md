# ProfileForge ✳

**Your GitHub. Your identity. Your style.**

ProfileForge turns a public GitHub profile into a customizable developer identity card. Search a username, explore public stats and language insights, choose a theme, then export or share the result.

## Live app

https://orvgroup.github.io/mywebapps/profileforge/

## Features

- Public GitHub profile lookup — no sign-in or token required.
- Repository, follower, star and fork statistics.
- Top-language mix estimated from returned repositories.
- Recent public event count and event-type summary in the analysis layer.
- Four card themes: Aurora, Minimal, Peach and Midnight.
- Custom headline and accent color.
- QR code linking to the GitHub profile.
- PNG and SVG card export, plus shareable username URLs.
- Three.js 3D hero artwork and an animated, interactive 3D developer identity card.
- Responsive layout and reduced-motion support.
- Ten-minute browser cache to reduce repeat API requests.

## Run locally

No build step is required. Clone the repository and serve this folder with a local static server (for example, VS Code Live Server). Opening index.html directly may restrict module and browser features; HTTP serving is recommended.

## Deployment

The parent repository is published with GitHub Pages. A folder containing index.html is automatically included in the root README project links by the repository's existing workflow.

## Technology

HTML, CSS, vanilla JavaScript, GitHub REST API, Three.js 0.160, html-to-image, QRCode.js and Google Fonts. An internet connection is required for GitHub lookups and CDN libraries.

## Data and privacy

- Requests public GitHub user, repository and public-event endpoints only.
- No password, OAuth token or private repository access is requested.
- Profile data is processed in the browser. A short-lived cache is stored in localStorage (10 minutes).
- No ProfileForge backend or analytics endpoint is included.
- GitHub API rate limits apply.

## Metric limitations

- Repository and star totals are calculated from repositories returned by the public API (up to 100 in this version); totals may be incomplete for users with more repositories.
- Language percentages use repository size as a rough weighting of each repository's primary language. They are estimates, not exact lines-of-code statistics.
- Public events are limited to the records returned by GitHub's public events endpoint; they are not a contribution graph or private activity history.
- Private repositories and private contributions are never shown.

## Project structure

- index.html
- css/style.css, css/cards.css, css/responsive.css
- js/app.js, js/github-api.js, js/analyzer.js, js/card-designer.js
- js/three-scene.js, js/export.js, js/utils.js

## License

Part of orvgroup/mywebapps. See the repository root LICENSE file.
