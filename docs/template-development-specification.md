# Single-Page Web App Development Specification

> **Purpose**: Essential guidelines and best practices for developing single-page web applications using modern JavaScript and AI-assisted iterative development.

---

## 1) Development Philosophy

AI-assisted iterative development process:
- **Requirements-driven** - Define clear user stories before implementation
- **Single-commit iterations** - Each feature is one focused commit for easy review/rollback
- **AI-assisted coding** - Focus on specification over manual coding
- **Rapid prototyping** - Maintain quality while enabling fast iteration

---

## 2) Project Structure & Conventions

```
/
├── index.html            # Main HTML entry point
├── package.json          # NPM configuration and dependencies
├── config/               # Configuration files (Babel, ESLint, Jest, etc.)
├── pages/                # Additional static HTML pages
└── src/                  # Main source code directory
    ├── index.js          # Primary JavaScript entry point
    ├── assets/           # Static assets (JSON, images, etc.)
    ├── components/       # Reusable UI components or modules
    └── utils/            # Utility functions and helpers
```

**File Naming**: camelCase for source files (`userProfile.js`), `*.test.js` for unit tests, `*.property.test.js` for property-based tests.

---

## 3) Development Best Practices

### 3.1 Code Organization
- **Single responsibility** - One clear purpose per module/component
- **Focused modules** - Break down complex functionality into smaller, testable units
- **Clear interfaces** - Use explicit exports and minimal dependencies
- **Test co-location** - Place test files alongside source files

### 3.2 Separation of Concerns
- **`index.html`** - Application structure and layout
- **`src/`** - All application logic and behavior  
- **`src/assets/`** - Static resources (JSON, images)
- **`pages/`** - Additional HTML pages for distinct sections

### 3.3 Quality Standards
- **Testing** - Every module needs corresponding `*.test.js` files
- **Dependencies** - Minimize external dependencies, keep packages updated
- **Configuration** - Use `/config` directory for all build/test configurations

> **Note**: Detailed testing standards and quality gates are in `code-quality-specification.md`.

---

## 4) Development Workflow

### 4.1 Setup
1. Fork and open in CodeSpaces
2. Configure GitHub Pages (deploy from `main` branch)
3. Install extensions: Live Server, GitHub Copilot, Git Graph
4. Verify setup with `npm test`

### 4.2 Development Cycle
1. **Define requirements** - Write clear user stories and acceptance criteria
2. **Implement iteratively** - Single feature per commit
3. **Test continuously** - Use `npm run test:watch` during development
4. **Quality check** - Run `npm run check:all` before committing
5. **Deploy frequently** - Push to `main` for live updates

### 4.3 File Modifications
- **Structure changes** - Modify `index.html`
- **Logic changes** - Add/edit modules in `src/` with tests
- **Assets** - Add resources to `src/assets/`
- **New pages** - Create HTML files in `pages/`
- **Configuration** - Update files in `/config` as needed

---

## 5) Quality Assurance & Architecture

### 5.1 Commands
```bash
npm run test:watch    # Continuous testing during development
npm test             # Run all tests
npm run check:all    # Quality checks before committing (lint, duplication, cycles, boundaries)
npm run mutation     # Mutation testing before releases
npm run validate:all # Complete validation (tests + mutation + all checks)
```

### 5.2 Commit Standards
- Single feature per commit with clear messages
- All tests must pass
- Quality checks must pass (`npm run check:all`)

### 5.3 Release Standards
- Single feature per commit with clear messages
- All tests must pass
- Complete validation must pass (`npm run validate:all`)

---

## 6) Architecture Guidelines

### 6.1 Component Design
- **Single responsibility** - Each component should have one clear purpose
- **Testable interfaces** - Design functions that are easy to test in isolation
- **Minimal dependencies** - Reduce coupling between components
- **Clear data flow** - Make data transformations explicit and traceable

### 6.2 Error Handling
- **Validate inputs** - Check parameters at function boundaries
- **Fail fast** - Detect errors as early as possible
- **Meaningful error messages** - Provide context for debugging
- **Graceful degradation** - Handle errors without breaking the entire application

---

## 7) Application Customization

### 7.1 Preserve Core Structure
- Maintain `src/` organization (components/utils separation)
- Keep testing setup and quality gates
- Follow established naming conventions

### 7.2 Safe Customization
- Replace `index.html` content for your UI
- Add domain-specific components in `src/components/`
- Extend utilities in `src/utils/`
- Create pages in `/pages`
- Update assets with your data

### 7.3 Configuration Updates
- **Babel** - Add framework-specific transpilation
- **ESLint** - Customize rules for your standards
- **Jest** - Modify test setup
- **Dependencies** - Add required libraries

---

## 8) Common Issues & Solutions

**Testing**: Ensure all code paths tested, write behavioral assertions, avoid test dependencies
**Build**: Check Babel syntax/presets, resolve dependency conflicts (`npm ls`), fix linting (`npm run lint`)
**Deployment**: Verify GitHub Pages source branch, check production paths, test in target browsers

---

Reference this specification when developing single-page web applications to ensure consistency, maintainability, and quality.