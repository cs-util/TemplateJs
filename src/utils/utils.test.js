const utils = require('./utils');

describe('Utils', () => {
  describe('tellBirthday', () => {
    test('should return a descriptive string using person methods', () => {
      // Create a mock person object with Jest mock functions for its methods
      const mockPerson = {
        introduce: jest.fn(() => "Hi, I'm Test Person and I'm 30 years old."),
        getBirthYear: jest.fn(() => new Date().getFullYear() - 30),
      };

      const message = utils.tellBirthday(mockPerson);

      expect(mockPerson.introduce).toHaveBeenCalled();
      expect(mockPerson.getBirthYear).toHaveBeenCalled();
      const expectedBirthYear = new Date().getFullYear() - 30;
      expect(message).toBe(`Hi, I\'m Test Person and I\'m 30 years old. I was born in ${expectedBirthYear}.`);
    });

    test('should throw an error if person object is invalid or missing methods', () => {
      // Test with objects that do not conform to the expected structure
      const personWithoutIntroduce = { getBirthYear: jest.fn() };
      const personWithoutGetBirthYear = { introduce: jest.fn() };

      expect(() => utils.tellBirthday({})).toThrow();
      expect(() => utils.tellBirthday(null)).toThrow();
      expect(() => utils.tellBirthday(personWithoutIntroduce)).toThrow();
      expect(() => utils.tellBirthday(personWithoutGetBirthYear)).toThrow();
    });
  });
});
