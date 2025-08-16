# Robust Test & Code Quality Specification  (JavaScript/TypeScript)

> Objective: ensure that any code change (human- or AI-authored) must satisfy **general correctness** and **sound architecture** without relying on hardcoded mappings, brittle examples, or structural shortcuts.

---

## 1) Scope & Goals

* Prevent “cheat” implementations (lookup tables, case-by-case conditionals, trivial heuristics) from passing tests.
* Enforce **property-based** and **metamorphic** validation, **differential checks**, and **fuzzing**.
* Require **mutation-score gates** and **branch coverage thresholds**.
* Enforce **code reuse**, **layered architecture**, and avoid **copy-paste** and **cycles**.
* Provide reproducible local dev workflow and CI that runs with multiple randomized seeds.

---

## 2) Definitions

* **Core function**: any non-trivial pure/mostly-pure function in `src/` responsible for algorithmic behavior.
* **Metamorphic relation**: predictable output relation under a controlled input transformation (e.g., scale/permute/translate).

---

## 3) Tooling Stack

* **Test runner**: Jest
* **Property-based & fuzz testing**: `fast-check`
* **Mutation testing**: `@stryker-mutator/core` (Stryker JS)
* **Coverage**: `babel-jest` + Istanbul (via Jest)
* **Performance checks** (recommended for algorithmic hot paths): `benchmark.js` (+ CI tracking)
* **Linting**: ESLint (with security and anti-cheat rules)
* **Architecture & reuse**: `jscpd`, `dependency-cruiser`, `madge`

---

## 4) Repository Layout (co-located tests)

This project follows a co-located testing approach, where test files live alongside the source files they are testing. This is a common and effective pattern for JavaScript projects.

```
/ .github/workflows/ci.yml
/ package.json
/ jest.config.js
/ stryker.conf.json
/ .eslintrc.js
/ .dependency-cruiser.js
/ .jscpd.json
/ src/
  - components/
    - person.js
    - person.test.js          # Standard unit tests
    - person.property.test.js # Property/metamorphic tests
  - utils/
    - utils.js
    - utils.test.js
```

---

## 5) Coding & Testing Requirements

### 5.1 General Implementation Rules

* Implement **general algorithms**; avoid large `switch/case` or literal maps keyed by example inputs.
* Prefer **composition** and reuse of existing utilities.
* Avoid new external deps unless justified (see §7.3 dependency guard).

### 5.2 Property‑Based Testing (PBT)

* For each **core function**, add at least one property test using `fast-check`.
* Minimum **200 runs** per property in CI; locally may be reduced for speed.
* Typical properties to consider (choose those fitting the domain):

  * **Idempotence**: \`f(f(x)) === f(x)\`
  * **Inverse**: \`decode(encode(x)) === x\`
  * **Monotonicity/Ordering**: \`a ≤ b ⇒ f(a) ≤ f(b)\`
  * **Algebraic laws**: associativity, commutativity, identity, inverse
  * **Invariance**: permutation/translation/scale invariance where expected

### 5.3 Metamorphic Testing

* At least **one metamorphic relation per core function**.
* Example patterns:

  * **Scale invariance**: scaling inputs changes magnitude but preserves direction
  * **Permutation invariance**: reordering inputs yields identical reduced result
  * **Additive translation**: adding a constant offsets outputs predictably

### 5.5 Fuzz & Edge Cases

* Generate extremes: empty arrays, duplicates, long strings, Unicode, NaN/Infinity, boundary numerics.
* Seed handling: use env var **`FAST_CHECK_SEED`** to replay locally; CI overrides with multiple seeds.

### 5.6 Performance Guards (optional per module)

* For hot paths, add a **large‑n** benchmark and assert runtime within budget.
* Track with CI to detect regressions.

---

## 6) **Stronger Test Quality Gates**

> Detect and reject vacuous tests and enforce presence of generative tests.

### 6.1 Mutation Testing Gate

* Run Stryker JS on every PR.
* **Minimum mutation score**: `>= 80%` (start at 65% in legacy code, ratchet up to 80–90%).
* CI must **fail** if below threshold.
* Store the HTML report as a CI artifact for review.

### 6.2 Coverage Gate

* **Branch coverage**: `>= 90%` per package or service (tune for legacy code).
* Enforce via Jest/Vitest coverage thresholds in config; CI fails on shortfall.

### 6.3 Property Presence & Test Shape

* Require at least **one property test** per core function.
* Convention: property test files end with `.property.test.js`.
* CI step: count property specs touched in the PR for new modules; if none are added where core functions are added/modified, **fail** with guidance.

---

## 7) **Architectural & Reuse Enforcement**

> Ensure structured design, module boundaries, and code reuse; prevent copy‑paste and ad‑hoc bypasses.

### 7.1 Duplication Guard (`jscpd`)

* Run `jscpd` in CI with **threshold ≤ 1%** duplicated lines per package.
* Fail PR if threshold exceeded; refactor to reuse existing utilities.

### 7.2 Module Boundaries (`dependency-cruiser`)

* Define layers (example below) and **forbid upward and cross‑layer imports**:

  * `shared` (pure utils, no deps on domain/app)
  * `domain` (business logic; may depend on `shared`)
  * `app` (composition/wiring; may depend on `domain` and `shared`)
* Disallow imports that bypass public APIs (e.g., deep imports into internal files of other packages).
* Enforce no circular dependencies (see 7.4) and forbid architectural rule violations with `dependency-cruiser` rules.

### 7.3 Dependency Hygiene

* Forbid adding new external dependencies without justification.
* CI diffs lockfiles; any new dependency triggers a manual approval step.
* Internal allow-list preferred; ban unknown registries by policy.

### 7.4 Cycle Detection (`madge`)

* Run `madge` in CI; **fail** on cycles.
* Output a graph artifact to assist refactoring.

---

## 8) ESLint & Static Rules (anti-cheat & hygiene)

* Ban `eval`, `new Function`, and extending built-ins (`no-eval`, `no-implied-eval`, `no-extend-native`).
* Flag suspicious large object literals and large `switch/case` in production code (custom rule or `complexity`/`max-depth` + code review).
* Enforce import boundaries via `dependency-cruiser` (see §9.4).

---

## 9) Configuration Snippets

### 9.1 `package.json` (scripts)

```json
{
  "scripts": {
    "test": "jest --coverage",
    "lint": "eslint .",
    "test:watch": "jest --watch",
    "mutation": "stryker run",
    "check:dup": "jscpd",
    "check:cycles": "madge --circular --extensions js src",
    "check:boundaries": "depcruise -c .dependency-cruiser.js src",
    "check:all": "npm run lint && npm run test && npm run mutation && npm run check:dup && npm run check:cycles && npm run check:boundaries"
  }
}
```

### 9.2 `stryker.conf.json`

```json
{
  "testRunner": "jest",
  "reporters": ["html", "clear-text", "progress"],
  "mutate": ["src/**/*.js", "!src/**/*.test.js"],
  "coverageAnalysis": "perTest",
  "thresholds": { "high": 90, "low": 80, "break": 80 }
}
```

### 9.3 `.jscpd.json`

```json
{
  "threshold": 1,
  "minTokens": 50,
  "reporters": ["consoleFull"],
  "files": ["src/**/*.js"],
  "exclude": ["**/node_modules/**", "**/dist/**", "**/*.test.js"]
}
```

### 9.4 `.dependency-cruiser.js` (example rules)

```js
/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: { path: 'node_modules' },
    includeOnly: 'src',
    reporterOptions: { dot: { collapsePattern: 'node_modules/[^/]*' } }
  },
  forbidden: [
    { name: 'no-circular', severity: 'error', from: {}, to: { circular: true } },
    { name: 'no-orphans', severity: 'warn', from: {}, to: { orphan: true, pathNot: '\\\\.test\\\\.js$' } },
    {
        name: 'no-utils-importing-from-components',
        severity: 'error',
        from: { path: '^src/utils' },
        to:   { path: '^src/components' }
    }
  ]
}
```

### 9.5 Jest Config (coverage thresholds)

```js
// jest.config.js
module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testEnvironment: 'jsdom',
};
```

---

## 10) CI/CD (GitHub Actions example)

```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - name: Unit & property tests
        run: npm test

  quality:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - name: Mutation Test
        run: npm run mutation
      - name: Duplication guard (jscpd)
        run: npm run check:dup
      - name: Cycle guard (madge)
        run: npm run check:cycles
      - name: Boundaries (dependency-cruiser)
        run: npm run check:boundaries
```

*(Add benchmark jobs if performance tracking is required.)*

---

## 11) Example Property Test (Person component)

```js
const fc = require('fast-check');
const Person = require('../src/components/person');

describe('Person Component Property Tests', () => {
    const validNameArb = fc.string({ minLength: 1, maxLength: 50 }).map(s => s.trim()).filter(s => s.length > 0);
    const validAgeArb = fc.integer({ min: 0, max: 150 });

    // Property: The greeting should always contain the name and age
    it('should always include the name and age in the greeting', () => {
        fc.assert(
            fc.property(validNameArb, validAgeArb, (name, age) => {
                const person = new Person(name, age);
                const greeting = person.getGreeting();
                expect(greeting).toContain(name);
                expect(greeting).toContain(age.toString());
            })
        );
    });

    // Metamorphic Relation: Increasing age by 1 year should increase age in months by 12.
    it('should increase age in months by 12 when age in years increases by 1', () => {
        fc.assert(
            fc.property(validNameArb, validAgeArb, (name, age) => {
                const person1 = new Person(name, age);
                const person2 = new Person(name, age + 1);
                expect(person2.getAgeInMonths()).toBe(person1.getAgeInMonths() + 12);
            })
        );
    });
});
```

---

## 12) Acceptance Criteria (PR Gate)

A PR is mergeable only if **all** of the following are true:

1. Unit + property + metamorphic + differential tests pass for **all CI seeds**.
2. Mutation score `>= 80%`; coverage (branches, lines, fns, stmts) `>= 90%`.
3. `jscpd` duplication ratio `<= 1%`.
4. `dependency-cruiser` rules pass; **no cycles** (madge).
5. ESLint passes (no forbidden constructs such as `eval`, large literal maps for business logic, or boundary violations).
6. Any new dependencies have been approved and conform to policy.

---

## 13) Developer Checklist (pre-PR)

Copy-paste PR template (`.github/pull_request_template.md`)

```md
## Developer Checklist (pre-PR)

- [ ] General solution without lookup tables
- [ ] Property-based test(s) added/updated (≥ 200 runs)
- [ ] At least one metamorphic relation
- [ ] Coverage meets thresholds
- [ ] Stryker mutation score meets threshold
- [ ] Duplication ≤ 1%
- [ ] Boundaries & cycles pass
- [ ] Lint passes; any new deps justified and approved
```

---

### Notes

* Thresholds can be tightened progressively if existing legacy code is refactored.
* For monorepos, apply the same scripts and thresholds per package and aggregate reports at the workspace root if needed.
