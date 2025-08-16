# Copilot Instructions

## Testing and Quality Checks

This repository has a comprehensive testing and quality assurance setup. Here's when and how to run each type of check:

### Unit Tests
```bash
npm test
```
**When to run:** After any code changes, before committing
**What it does:** Runs Jest unit tests with coverage reporting (requires 100% coverage)

### Test in Watch Mode
```bash
npm run test:watch
```
**When to run:** During active development
**What it does:** Continuously runs tests as you make changes

### Property-Based Testing
**What it is:** Already integrated into the test suite using fast-check library
**When to run:** Included in `npm test` - these are the `*.property.test.js` files
**What it does:** Tests functions with randomly generated inputs to find edge cases

### Mutation Testing
```bash
npm run mutation
```
**When to run:** Before releases, after significant changes
**What it does:** Tests the quality of your tests by introducing mutations (requires >80% mutation score)

### Linting
```bash
npm run lint
```
**When to run:** Before committing, after adding new code
**What it does:** Checks code style and potential issues using ESLint

### Code Duplication Check
```bash
npm run check:dup
```
**When to run:** Periodically, before refactoring
**What it does:** Detects duplicate code in the src directory only

### Circular Dependency Check
```bash
npm run check:cycles
```
**When to run:** After adding new modules or changing imports
**What it does:** Detects circular dependencies in the codebase

### Architectural Boundary Check
```bash
npm run check:boundaries
```
**When to run:** When changing module structure or adding new files
**What it does:** Enforces architectural rules (e.g., utils can't import from components)

### Run All Checks
```bash
npm run check:all
```
**When to run:** Before committing major changes, in CI/CD pipeline
**What it does:** Runs all quality checks in sequence

## Development Workflow

1. **During development:** Use `npm run test:watch` 
2. **Before committing:** Run `npm run check:all`
3. **Before releases:** Ensure all checks pass, especially mutation testing
4. **When refactoring:** Run `npm run check:dup` and `npm run check:boundaries`

## Test Structure

- `*.test.js` - Standard unit tests
- `*.property.test.js` - Property-based tests using fast-check
- All tests require 100% code coverage
- Mutation testing ensures test quality with >80% mutation score
