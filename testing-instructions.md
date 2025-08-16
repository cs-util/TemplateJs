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
* **Reference implementation**: slow-but-correct oracle used only for testing.
* **Metamorphic relation**: predictable output relation under a controlled input transformation (e.g., scale/permute/translate).

---

## 3) Tooling Stack

* **Test runner**: Jest (or Vitest as fallback alternative, pick one per repo)
* **Property-based & fuzz testing**: `fast-check`
* **Mutation testing**: `@stryker-mutator/core` (Stryker JS)
* **Coverage**: `babel-jest`/`ts-jest` + Istanbul (via Jest) or Vitest+V8; report via `lcov`/`cobertura`
* **Performance checks** (recommended for algorithmic hot paths): `benchmark.js` (+ CI tracking)
* **Linting**: ESLint (with security and anti-cheat rules)
* **Architecture & reuse**: `jscpd`, `dependency-cruiser`, `madge`
* **Monorepo**: Nx or pnpm workspaces; same rules apply per package

---

## 4) Repository Layout (suggestion with focus on tools above)

```
/ .github/workflows/ci.yml
/ package.json
/ tsconfig.json
/ jest.config.ts            # or vitest.config.ts
/ stryker.conf.json
/ .eslintrc.cjs
/ .dependency-cruiser.js
/ .jscpd.json
/ scripts/                  # shared CI helpers (optional)
/ src/                      # production code
/ tests/                    # test code (PBT/metamorphic/differential)
  - unit/
  - properties/             # *required* properties live here
  - fixtures/               # generated at CI if needed
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

### 5.4 Differential Testing

* Provide a **reference implementation** (clear and correct; may be slower).
* Compare production vs. reference under randomized inputs; assert equality within tolerance.

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
* Convention: property test files end with `.property.spec.ts` (or `.property.test.ts`).
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
    "build": "tsc -p .",
    "lint": "eslint .",
    "test": "vitest run --reporter=verbose",
    "test:watch": "vitest",
    "test:ci": "FAST_CHECK_SEED=${FAST_CHECK_SEED:-1337} vitest run --coverage",
    "mutation": "stryker run --fileLogLevel off",
    "check:dup": "jscpd --threshold 1 --reporters consoleFull",
    "check:cycles": "madge --circular --extensions ts,tsx src",
    "check:boundaries": "depcruise -v -c .dependency-cruiser.js src",
    "check:all": "npm run lint && npm run test:ci && npm run mutation && npm run check:dup && npm run check:cycles && npm run check:boundaries"
  }
}
```

*(Swap `vitest` with `jest` equivalents if Jest is preferred.)*

### 9.2 `stryker.conf.json`

```json
{
  "$schema": "https://raw.githubusercontent.com/stryker-mutator/stryker-js/master/packages/core/schema/stryker-schema.json",
  "testRunner": "vitest",
  "mutate": ["src/**/*.ts", "!src/**/__tests__/**"],
  "vitest": { "configFile": "vitest.config.ts" },
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
  "files": ["src/**/*.ts", "tests/**/*.ts"],
  "exclude": ["**/node_modules/**", "**/dist/**"]
}
```

### 9.4 `.dependency-cruiser.js` (example rules)

```js
/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: { path: 'node_modules' },
    includeOnly: 'src',
    tsConfig: { fileName: 'tsconfig.json' },
    reporterOptions: { dot: { collapsePattern: 'node_modules/[^/]*' } }
  },
  forbidden: [
    // No circular dependencies
    { name: 'no-circular', severity: 'error', from: {}, to: { circular: true } },

    // No orphan modules
    { name: 'no-orphans', severity: 'warn', from: {}, to: { orphan: true } },

    // Enforce layered architecture
    {
      name: 'no-app-to-domain-internal', severity: 'error',
      from: { path: '^src/app' },
      to:   { path: '^src/domain/(?!index\\.ts$).*' } // only via domain/index.ts
    },
    {
      name: 'no-domain-to-app', severity: 'error',
      from: { path: '^src/domain' },
      to:   { path: '^src/app' }
    },
    {
      name: 'no-domain-to-app-internals', severity: 'error',
      from: { path: '^src/domain' },
      to:   { path: '^src/app/.+' }
    },
    {
      name: 'domain-can-use-shared', severity: 'error',
      from: { path: '^src/domain' },
      to:   { path: '^src/shared' }
    },
    {
      name: 'app-can-use-domain-and-shared', severity: 'error',
      from: { path: '^src/app' },
      to:   { pathNot: '^(src/domain|src/shared)' }
    }
  ]
}
```

### 9.5 Vitest Config (coverage thresholds)

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
      statements: 90,
      branches: 90,
      lines: 90,
      functions: 90
    }
  }
});
```

*(Jest users: set `coverageThreshold` in `jest.config.ts`.)*

---

## 10) CI/CD (GitHub Actions example)

```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        seed: [1337, 424242, 1234]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - name: Unit & property tests (seeded)
        run: FAST_CHECK_SEED=${{ matrix.seed }} npm run test:ci

  mutation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run mutation

  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - name: Duplication guard (jscpd)
        run: npm run check:dup
      - name: Cycle guard (madge)
        run: npm run check:cycles
      - name: Boundaries (dependency-cruiser)
        run: npm run check:boundaries
```

*(Add benchmark jobs if performance tracking is required.)*

---

## 11) Example Property Test (normalize)

```ts
import fc from 'fast-check';
import { normalize } from '../src/shared/vec2';

describe('normalize()', () => {
  it('has unit length and is scale-invariant', () => {
    const seed = process.env.FAST_CHECK_SEED ? Number(process.env.FAST_CHECK_SEED) : undefined;
    fc.assert(
      fc.property(fc.double(), fc.double(), (x, y) => {
        const [nx, ny] = normalize(x, y);
        const len = Math.hypot(nx, ny);
        if (x === 0 && y === 0) return nx === 0 && ny === 0;
        if (!(len > 0.999 && len < 1.001)) return false;
        return fc.sample(fc.double({ noNaN: true, min: 1e-6, max: 1e6 }), 1).every(s => {
          const [mx, my] = normalize(x * s, y * s);
          const dot = nx * mx + ny * my;
          return dot > 0.999;
        });
      }),
      { numRuns: 200, seed }
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
- [ ] Differential test against a reference implementation
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
