
# Rules

## General
- This is a minimal local first web app (static HTML + modular JS). Prefer tailwind over custom CSS.
- Entrypoint: `index.html` (+ static pages in `pages/`)
- The code is composed of small, focused modules in `src/` (`components/`, `utils/`, ..) with colocated tests
- Run `npm test` and `npm outdated` at the start and end of each significant task and weekly at minimum; keep dependencies healthy. Prefer bumping to the `Wanted` version unless blocked by incompatibilities (document any exceptions). Also run `npm audit` to catch security issues even when versions are current
- `README.md` typically contains big picture dev. spec and context. It should be kept up to date whenever the code is ready for a PR
- Only change code directly related to the current task; keep diffs small!
- Preserve existing comments & docs; add concise, long-lived comments where useful and avoid narrating changes via comments
- When external documentation could be consulted, do so to validate your plan makes sense. If you lack a browsing/online search tool, ask the user to run an online search for you (e.g., "Please search for \"x\" and paste back the findings")

## Dependencies & no-build approach to use
This project follows a no-build, static workflow:
- Use native ES modules and `<script type="importmap">` to map bare specifiers when needed.
- Then load your entry/module scripts with `<script type="module">` and import using the mapped specifiers.
- Prefer CDN URLs from unpkg.com for third-party modules compatible with ESM.
- Do not add bundlers/build chains unless explicitly requested/approved.

## Test layout
- Unit specs: `*.test.js`
- Property-based specs: `*.property.test.js`
- Property-based tests are important, don't omit them for important components
- Keep tests deterministic and fast; avoid E2E unless asked

## Use TDD if possible
1. Prefer the simplest fix first when working on multiple issues
2. Add a failing test first and run `npm test` to verify it's failing
3. Make minimal, focused changes
4. Re-run `npm test` after each fix and document real output
5. Iterate until green

## Feature development process to use

Follow this lightweight spec-first flow before coding:

1) Requirements gathering
- Ask one question at a time and iterate until requirements are clear
- Build questions on previous responses
- Provide numbered response options for the user to select from

2) Specification development to play through before implementation
- Smaller changes: clearly state what changes, how it integrates, testing strategy and key edge cases
- Major features: capture functional requirements, architecture choices/integration points, data handling (I/O, validation), error handling and edge cases, testing strategy (unit + property-based + integration), and any UI & performance considerations

3) Document all components
- Compile concise specification md files next to new components if any were added. This way similar to the test files also each component will have a specification file. 
