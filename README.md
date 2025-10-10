# TemplateJs

For AI assistants, see `AGENTS.md`.
TemplateJs is a minimal single-page web app template designed for quick deployment.
It follows an AI-assisted iterative development process:

- User stories and requirements drive feature development.
- Each iteration is a single commit for easy review.
- AI-assisted coding minimizes manual intervention.
- The focus is on defining clear requirements rather than manual coding.
- **Autonomous agents** can implement features and fix bugs automatically.

This approach enables rapid prototyping and structured iteration with minimal human intervention.

## Using the Template

1.  **Fork and Open in CodeSpaces:** Fork this repository and open your fork using GitHub CodeSpaces.
2.  **Configure GitHub Pages:** Navigate to your repository's `Settings` -> `Pages`. In the "Branch" section, select the `main` branch to be automatically deployed by GitHub.
3.  **Set up Autonomous Agents (Optional):** See [`docs/autonomous-agents-setup.md`](docs/autonomous-agents-setup.md) for configuring AI agents that can automatically implement features and fix bugs.
4.  **Access Your WebApp:** If your fork is `github.com/YourUserName/YourFork`, your WebApp will be live at `YourUserName.github.io/YourFork`.
5.  **Install Recommended VSCode Extensions (Optional but Recommended):**
    - "**Live Server**": Renders the `index.html` page and provides live updates during development.
    - "**GitHub Copilot**": Assists with coding tasks within CodeSpaces.
    - "**Git Graph**": Helps visualize and manage Git branches.
6.  **Development Workflow:**
    - Modify `index.html` for the main page structure.
    - Add or edit JavaScript modules in the `src/` directory.
    - Place static assets like images or JSON files in `src/assets/`.
    - Create new HTML pages in the `pages/` directory if needed.
    - Regularly commit and push your changes to the `main` branch to update your live application.
    - **Use autonomous agents:** Use an agent trigger (e.g., `@claude`, `/cursor start`) in an issue to have it implemented automatically.

## Project Structure

This template uses a structured approach to organize files and facilitate development:

```
/
├── babel.config.js       # Babel configuration for JavaScript transpilation
├── index.html            # Main HTML entry point for the application
├── LICENSE               # Project license information
├── package.json          # NPM package configuration, scripts, and dependencies
├── README.md             # This file: project overview and instructions
├── pages/                # Contains additional static HTML pages
│   ├── about.html
│   └── features.html
├── playwright-ui-tests/  # Playwright smoke tests verifying the UI shell
│   └── index.spec.js
└── src/                  # Main source code directory
    ├── index.js          # Primary JavaScript entry point, linked from index.html
    ├── index.test.js     # Tests for index.js
    ├── assets/           # For static assets like JSON data, images, etc.
    │   └── defaultData.json
    ├── components/       # Reusable UI components or JavaScript modules
    │   ├── person.js
    │   └── person.test.js
    └── utils/            # Utility functions and helpers
        ├── utils.js
        └── utils.test.js
```

### For Contributors

- Use structured issue templates for clear agent input
- Use an agent trigger (e.g., `@claude`, `/cursor start`) on issues to assign them to autonomous agents
- Review agent-created PRs thoroughly before merging
- `npm test` automatically runs Prettier across the full contents of `src`, `pages`, `config`, `docs`, plus `index.html` and `README.md` before linting and tests.
- Run `npm run validate:all` to ensure all quality gates pass

## Testing

- Run `npm test` for formatting, linting, dependency checks, and unit tests.
- Run `npm run test:e2e` to execute the Playwright smoke test that ensures `index.html` renders without console errors.
- Run `npm run test:e2e:artifacts` when you need traces, videos, and screenshots for the smoke test (useful for debugging regressions).
- Use `npm run serve:static` to manually serve the app at `http://127.0.0.1:4173` when debugging UI tests locally.

## Autonomous Agents

This repository includes autonomous AI agents that can:

- **Implement features** automatically from issue descriptions
- **Fix bugs** with proper test coverage
- **Maintain code quality** through automated monitoring
- **Create pull requests** with comprehensive descriptions

**Quick Start:**

1. Create an issue using one of the provided templates
2. Use an agent trigger (e.g., comment `@claude` or use `/cursor start`) to assign it to an agent
3. The agent will create a branch, implement the feature, and open a PR
4. Review and merge when satisfied

See [`docs/autonomous-agents-setup.md`](docs/autonomous-agents-setup.md) for complete setup and usage instructions.

## Disclaimer

TemplateJs is provided as-is. It is a general-purpose template and does not include domain-specific functionality. Use and modify as needed.
