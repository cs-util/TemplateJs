# Copilot Instructions

## Testing and Quality Checks

This repository has a comprehensive testing setup with the following key commands:

### During Development
```bash
npm run test:watch  # Continuous testing during development
npm test           # Run all tests (requires 100% coverage)
```

### Before Committing
```bash
npm run check:all  # Runs all quality checks: linting, duplication detection, 
                   # circular dependency checks, and architectural boundaries
```

### Before Releases
```bash
npm run mutation   # Mutation testing (requires >80% mutation score)
```

## Development Workflow

1. **During development:** Use `npm run test:watch` for continuous testing
2. **Before committing:** Ensure all tests pass, then run `npm run check:all`
3. **Before releases:** Run mutation testing with `npm run mutation`

## Test Structure

- `*.test.js` - Standard unit tests  
- `*.property.test.js` - Property-based tests using fast-check library
- All tests require 100% code coverage
- Mutation testing ensures test quality with >80% mutation score