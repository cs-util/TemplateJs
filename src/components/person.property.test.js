import fc from 'fast-check';
import Person from './person.js';

describe('Person Component Tests', () => {
  // Arbitraries for generating valid person data
  const validNameArb = fc
    .string({ minLength: 1, maxLength: 50 })
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  const validAgeArb = fc.integer({ min: 0, max: 150 });
  const personArb = fc.record({ name: validNameArb, age: validAgeArb });

  // 2. Property-Based Testing: Test for specific properties
  describe('Property-Based Tests', () => {
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

    // Property: canVote should be true if age is 18 or greater, false otherwise
    it('should correctly determine voting eligibility based on age', () => {
      fc.assert(
        fc.property(validAgeArb, (age) => {
          const person = new Person('Test', age);
          expect(person.canVote()).toBe(age >= 18);
        })
      );
    });
  });

  // 3. Metamorphic Testing: Test for predictable output changes based on input changes
  describe('Metamorphic Tests', () => {
    // Metamorphic Relation: Increasing a person's age by 1 year should increase their age in months by 12.
    it('should increase age in months by 12 when age in years increases by 1', () => {
      fc.assert(
        fc.property(personArb, (data) => {
          const person1 = new Person(data.name, data.age);
          const person2 = new Person(data.name, data.age + 1);

          expect(person2.getAgeInMonths()).toBe(person1.getAgeInMonths() + 12);
        })
      );
    });

    // Metamorphic Relation: If a person can vote, they can still vote a year later.
    it('should maintain voting eligibility when getting older', () => {
      fc.assert(
        fc.property(personArb, (data) => {
          const person1 = new Person(data.name, data.age);
          const person2 = new Person(data.name, data.age + 1);

          if (person1.canVote()) {
            expect(person2.canVote()).toBe(true);
          }
        })
      );
    });
  });

  // 4. Fuzzing and Edge Cases
  describe('Fuzzing and Edge Case Tests', () => {
    // Test with boundary ages for voting
    it('should handle voting age boundaries correctly', () => {
      const age17 = new Person('Voter', 17);
      const age18 = new Person('Voter', 18);
      const age19 = new Person('Voter', 19);
      expect(age17.canVote()).toBe(false);
      expect(age18.canVote()).toBe(true);
      expect(age19.canVote()).toBe(true);
    });

    // Test with names that need trimming
    it('should trim whitespace from names', () => {
      fc.assert(
        fc.property(validNameArb, validAgeArb, (name, age) => {
          const person = new Person(`  ${name}  `, age);
          expect(person.name).toBe(name.trim());
        })
      );
    });

    // Test JSON serialization and deserialization (inverse property)
    it('should correctly serialize to and deserialize from JSON', () => {
      fc.assert(
        fc.property(personArb, (data) => {
          const originalPerson = new Person(data.name, data.age);
          const json = JSON.stringify(originalPerson);
          const deserializedPerson = Person.fromJSON(json);
          expect(deserializedPerson).toEqual(originalPerson);
        })
      );
    });
  });
});
