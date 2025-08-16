# Testing and Quality Checks

This repository has a comprehensive testing setup with the following key commands that should be used during development:

1. **During development:** Use `npm run test:watch` for continuous testing
2. **Before committing:** Run `npm test` to ensure all tests pass, then run `npm run check:all` (Runs all quality checks: linting, duplication detection, circular dependency checks, and architectural boundaries)
3. **Before releases:** Run `npm run validate:all` for complete validation (tests + mutation + all checks)

## Test Structure

- `*.test.js` - Standard unit tests  
- `*.property.test.js` - Property-based tests using fast-check library
- All tests require 100% code coverage
- Mutation testing ensures test quality with >80% mutation score