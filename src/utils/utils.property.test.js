/**
 * PLACEHOLDER PROPERTY TESTS — REPLACE BEFORE SHIPPING
 *
 * Note for developers and LLMs:
 * These property tests document behaviors of the sample utility helpers provided.
 * When adding real utilities, rename this file and craft new properties that
 * capture the guarantees your production functions must uphold.
 */

import fc from 'fast-check';
import { add } from './utils.js';

// Property-Based Test Example
describe('Property-based tests for utils', () => {
  // Property: Adding two numbers should be commutative
  test('addition is commutative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        return add(a, b) === add(b, a);
      })
    );
  });

  // Property: Adding zero to a number should be the number itself (identity)
  test('adding zero is identity', () => {
    fc.assert(
      fc.property(fc.integer(), (a) => {
        return add(a, 0) === a;
      })
    );
  });
});
