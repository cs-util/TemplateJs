# AGENTS.md — TemplateJs

> Canonical instructions for coding agents (Copilot Agent Mode, Cursor/Copilot Chat, etc.).
> Human docs remain in `README.md`.

## Project quick facts
- Type: Minimal single-page web app (static HTML + modular JS)
- Entrypoint: `index.html`; additional static pages under `pages/`
- Source: `src/` (code) with colocated tests like `*.test.js`
- Deploy: GitHub Pages from `main` branch (static assets)
- Preferred dev env: GitHub Codespaces (optional). See `README.md` for human-oriented details.
  
## Environment
- Node: Use Node 20 LTS (>=20.x)
- Package manager: npm only
- OS: Linux/macOS/Windows supported

## Setup
- Deterministic install:
  ```bash
  npm ci
  ```

- Sanity check:
  ```bash
  node -v && npm -v
  ```

## Validate (always run before PR)

- Single entry point:
  ```bash
  npm run validate:all
  ```
- If script names change, read `package.json` and adapt accordingly.

## Build / Serve (local)

- This is a static app. Serve `index.html` with a simple static server
  (e.g., VS Code Live Server). Do not add bundlers or build chains
  unless explicitly requested in the issue/PR.

## Tests

- Run unit and property tests:
  ```bash
  npm test
  ```
- Place/keep tests near code (e.g., `src/**/foo.test.js`, `*.property.test.js`).
- Keep tests deterministic and fast; avoid end-to-end harnesses unless requested.

## Coding guidelines

- Prefer small, focused modules in `src/` (`components/`, `utils/`).
- Keep public HTML under `pages/` stable; avoid breaking URLs.
- Minimal dependencies. Do not introduce frameworks/build tools without approval.
- If `lint`/`format` scripts exist, run them. Otherwise don’t add new
  linters/formatters without approval.

## Commit & PR conventions (agents)

- Commits: Use concise messages. Prefer Conventional Commit style if possible
  (e.g., `feat: add person card`), but don’t churn history for formatting.
- PRs: Keep diffs small and scoped to the issue.
- Explain what you ran: Include the exact commands executed (install, tests, validation).
- Add/Update tests for changed behavior.

### PR checklist (required)

- [ ] `npm ci` and `npm run validate:all` pass locally
- [ ] Tests added/updated for new behavior
- [ ] No unrelated refactors or drive-by changes
- [ ] PR description includes: summary, commands run, and test output (brief)

## Safety & guardrails

- No secrets. Never add `.env`, tokens, or credentials.
- No deploy changes. Do not modify GitHub Pages settings or release flows.
- Least privilege. Prefer read-only changes (tests, small fixes). Any
  write-heavy or destructive ops require explicit human approval.
- Don’t restructure the project or add build steps unless the issue asks for it.

## File map to read before changing code

- `README.md` — human overview, Pages, Codespaces.
- `package.json` — scripts and the source of truth for commands.
- `index.html`, `pages/` — static entry points.
- `src/` — app code and tests.

## When in doubt

Ask for human confirmation in the issue before:

- Adding dependencies/build tools
- Large refactors
- Changing public URLs or Pages config
