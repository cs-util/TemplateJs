# Feature Development Process

## New Feature Specification Requirements

If (and only if) a user requests a new feature to be built/added, **DO NOT START IMPLEMENTATION IMMEDIATELY**. 
Instead, follow this specification process:

### 1. Requirements Gathering
- Ask **one question at a time** to develop a thorough, step-by-step specification
- Each question should build on previous answers
- Provide **numbered response suggestions** when possible to guide the conversation
- Work iteratively to dig into every relevant detail
- Continue until you have a complete understanding of the requirements

### 2. Specification Development
The goal is to create a detailed specification that covers:
- **Functional requirements** - What the feature should do
- **Architecture choices** - How it fits into the existing codebase
- **Data handling details** - Input/output, storage, validation
- **Error handling strategies** - Edge cases and failure scenarios
- **Testing plan** - Unit tests, integration tests, property-based tests
- **User interface considerations** - If applicable
- **Performance requirements** - If applicable

### 3. Final Specification Document
At the end of the requirements gathering process, compile all findings into a comprehensive, 
developer-ready specification .md file that includes all the above elements so implementation can begin immediately. 
Place this .md file next to the relevant code files.

### 4. Implementation Guidelines
When implementing the feature, follow these strict rules:

- **Stay focused**: Only change code directly related to the current task to keep pull requests focused
- **Preserve existing comments**: Don't remove unrelated comments from the codebase
- **Add meaningful documentation**: Only add comments that provide long-term value for explaining/documenting the code. Avoid temporary comments that merely explain what you just did

**Remember**: A well-specified feature prevents rework and ensures quality. Take the time to understand before building.

---

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