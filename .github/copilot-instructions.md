# Feature Development Process

## New Feature Specification Requirements

When the user does a new request, **DO NOT START IMPLEMENTATION IMMEDIATELY**. 
First follow this specification process:

### 1. Requirements Gathering
- Ask **one question at a time** for thorough, step-by-step specification
- Build each question on previous answers
- Provide **numbered response suggestions** when possible
- Work iteratively to understand all relevant details
- Continue until requirements are complete

### 2. Specification Development
Understand and document the specification appropriate to the feature size:

**For major features**:
- **Functional requirements** - What the feature does
- **Architecture choices** - Integration with existing codebase
- **Data handling** - Input/output, storage, validation
- **Error handling** - Edge cases and failure scenarios
- **Testing strategy** - Specify details on which test types will be needed (Unit tests, property-based tests, integration tests)
- **UI/Performance considerations** - If applicable

**For smaller changes**:
- What the change accomplishes
- How it integrates with existing code
- Key edge cases to handle

### 3. Final Specification Document
Compile findings into a comprehensive, developer-ready specification .md file with all above elements. Place at appropriate location next to relevant code files.

## Implementation Guidelines
When implementing, follow these strict rules:

- **Stay focused**: Only change code directly related to the current task to keep pull requests focused
- **Preserve existing comments**: Don't remove unrelated comments from the codebase
- **Add meaningful documentation**: Only add comments that provide long-term value for explaining/documenting the code. Avoid temporary comments that merely explain what you just did

**Remember**: A well-specified feature prevents rework and ensures quality. Take the time to understand before building.

---

# Testing and Quality Checks

This repository has a comprehensive testing setup with the following key commands:

1. **Before committing:** Run run `npm run check:all` and afterwards `npm test`
2. **Before releases:** Run `npm run validate:all` 

**IMPORTANT**: Always use the `run_in_terminal` tool to actually execute these commands. Never assume or report test results without actually running the commands and showing the real output. If you claim tests pass or fail, you must demonstrate this with actual command execution.

## Test Structure

- `*.test.js` - Standard unit tests  
- `*.property.test.js` - Property-based tests using fast-check library
- Mutation testing is setup to ensure high test quality

## Test Failure Resolution

When tests fail during development:

1. **Prioritize by complexity**: Start with the problem that requires the least amount of code changes
2. **Fix incrementally**: Address one issue at a time, making minimal focused changes
3. **Verify immediately**: After each fix, run the tests again using `run_in_terminal` to confirm that specific failure is resolved
4. **Iterate**: Continue this process until all tests pass

This approach minimizes the risk of introducing new issues and makes debugging more manageable.

---

# External Dependency Guidelines
This project follows a no-build approach. Use ES modules with an <script type="importmap"> to map bare specifiers, then load code via <script type="module">. You should first try to source module URLs from unpkg.com, which is optimized for no-build workflows.