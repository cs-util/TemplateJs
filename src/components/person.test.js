const Person = require('./person');

describe('Person', () => {
  test('should create a person with name and age', () => {
    const person = new Person('Test Person', 30);
    expect(person.name).toBe('Test Person');
    expect(person.age).toBe(30);
  });

  test('introduce method should return an introduction message', () => {
    const person = new Person('Test Person', 30);
    expect(person.introduce()).toBe('Hi, I\'m Test Person and I\'m 30 years old.');
  });

  test('getBirthYear method should return the correct birth year', () => {
    const person = new Person('Test Person', 30);
    const currentYear = new Date().getFullYear();
    expect(person.getBirthYear()).toBe(currentYear - 30);
  });
});
