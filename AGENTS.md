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

### When to run what (agents)

- Before committing: run `npm run check:all` and then `npm test`.
- Before releases/PRs: run `npm run validate:all` (tests + quality checks + mutation testing).

Execution discipline for agents:
- Always execute these commands in a real terminal and include the actual output in your notes/PRs.
- In this environment, use the terminal tool (run_in_terminal) to run commands; never assume results without running them.

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

Test failure resolution loop (agents):
1) Prioritize the simplest fix first.
2) Make minimal, focused changes.
3) Re-run the specific failing tests immediately (from a terminal) and include the real output.
4) Iterate until green.

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

## Feature development process (for agents)

Follow this lightweight spec-first flow before coding:

1) Requirements gathering
- Ask one question at a time and iterate until requirements are complete.
- Build each question on previous answers; prefer numbered response options to keep it structured.

2) Specification development
- Major features: capture functional requirements, architecture choices/integration points, data handling (I/O, validation), error handling and edge cases, testing strategy (unit, property-based, integration), and any UI/performance considerations.
- Smaller changes: clearly state what changes, how it integrates, and key edge cases.

3) Final specification
- Compile a concise developer-ready spec markdown next to relevant code when the change is non-trivial.

## Implementation guidelines (agents)

- Stay focused: Only change code directly related to the current task; keep diffs small.
- Preserve existing comments; don’t remove unrelated documentation.
- Add meaningful, long-lived documentation where it clarifies intent; avoid narrating obvious changes.

## Testing and quality checks

- During development: run these frequently
  - Quality checks: `npm run check:all`
  - Tests (unit + property): `npm test`
- Before opening a PR: use the single entry point `npm run validate:all` (runs tests, checks, and mutation testing).

Test structure
- `*.test.js` — unit tests
- `*.property.test.js` — property-based tests (fast-check)
- Mutation testing: included via `npm run mutation` and in CI; keep score healthy.

Failure triage loop
1. Prioritize the simplest fix first.
2. Make minimal, focused changes.
3. Re-run the specific failing tests/checks immediately.
4. Iterate until green.

Verification discipline for agents
- When claiming tests pass or fail, actually run the commands and include real output.

## Dependencies & no-build approach

This project follows a no-build, static workflow:
- Use native ES modules and `<script type="importmap">` to map bare specifiers when needed.
- Then load your entry/module scripts with `<script type="module">` and import using the mapped specifiers.
- Prefer CDN URLs from unpkg.com for third-party modules compatible with ESM.
- Do not add bundlers/build chains unless explicitly requested in an issue/PR.
