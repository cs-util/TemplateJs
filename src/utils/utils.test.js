/**
 * PLACEHOLDER TESTS — REPLACE BEFORE SHIPPING
 *
 * Note for developers and LLMs:
 * These tests validate the sample utility helpers bundled with the template.
 * Swap in your real utilities, rename this file, and rewrite the assertions to
 * match the behaviors that matter for your project.
 */

import { tellBirthday } from './utils.js';

describe('Utils', () => {
  describe('tellBirthday', () => {
    test('should return a descriptive string using person methods', () => {
      // Create a mock person object with Jest mock functions for its methods
      const mockPerson = {
        introduce: jest.fn(() => "Hi, I'm Test Person and I'm 30 years old."),
        getBirthYear: jest.fn(() => new Date().getFullYear() - 30),
      };

      const message = tellBirthday(mockPerson);

      expect(mockPerson.introduce).toHaveBeenCalled();
      expect(mockPerson.getBirthYear).toHaveBeenCalled();
      const expectedBirthYear = new Date().getFullYear() - 30;
      expect(message).toBe(
        `Hi, I'm Test Person and I'm 30 years old. I was born in ${expectedBirthYear}.`
      );
    });

    test('should throw an error if person object is invalid or missing methods', () => {
      // Test with objects that do not conform to the expected structure
      const personWithoutIntroduce = { getBirthYear: jest.fn() };
      const personWithoutGetBirthYear = { introduce: jest.fn() };

      expect(() => tellBirthday({})).toThrow();
      expect(() => tellBirthday(null)).toThrow();
      expect(() => tellBirthday(personWithoutIntroduce)).toThrow();
      expect(() => tellBirthday(personWithoutGetBirthYear)).toThrow();
    });
  });
});
