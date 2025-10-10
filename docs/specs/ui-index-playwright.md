Add Playwright smoke test ensuring index.html loads cleanly.

## Scope
- Introduce Playwright test runner to exercise the built-in static `index.html` page.
- Cover a single smoke test that loads the homepage, confirms the hero copy renders, and asserts no console warnings or errors occur during navigation.

## Implementation Notes
- Install `@playwright/test` and `serve` as devDependencies to keep the no-build workflow and reuse a simple static server.
- Add npm scripts:
  - `serve:static`: run `serve -l 4173 .` to host the root.
  - `test:e2e`: run `playwright test`.
  - `test:e2e:headed` and `test:e2e:ui` passthrough scripts for on-demand local debugging (optional but ready for later use).
- Create `playwright.config.js` with:
  - `testDir: './tests'` and a base URL of `http://127.0.0.1:4173`.
  - Local reporter setup of `list` + `html` (`open: 'never'`) and CI reporters: `github`, `json`, and `junit`.
  - `webServer` command `npm run serve:static` with reuse outside CI.
  - Sensible defaults (`forbidOnly`, CI retries, traces on retry, screenshot/video on failure).
- Author `tests/index.spec.js` to:
  - Listen for console events and fail the test if any `warning` or `error` is emitted.
  - Navigate to `/` and wait for the main hero content to appear (e.g., `h1` heading in `index.html`).
  - Assert the expected text is visible.
  - Optionally verify the page renders without blank screen by checking `page.title()` or hero text content.

## Testing Strategy
- Execute `npx playwright test` locally; ensure the test fails if `index.html` throws console issues or the hero content changes.
- Capture Playwright HTML/JSON/JUnit reports for future CI integration without attempting to open the report automatically.
