const PersonReference = require('./person.reference');

describe('PersonReference', () => {
  test('should throw error for invalid name', () => {
    expect(() => new PersonReference('', 25)).toThrow('Invalid name');
    expect(() => new PersonReference('   ', 25)).toThrow('Invalid name');
    expect(() => new PersonReference(null, 25)).toThrow('Invalid name');
  });

  test('should throw error for invalid age', () => {
    expect(() => new PersonReference('John Doe', -5)).toThrow('Invalid age');
    expect(() => new PersonReference('John Doe', '25')).toThrow('Invalid age');
    expect(() => new PersonReference('John Doe', null)).toThrow('Invalid age');
  });

  test('should correctly deserialize from JSON', () => {
    const person = new PersonReference('Test Person', 30);
    const json = JSON.stringify(person);
    const deserializedPerson = PersonReference.fromJSON(json);
    expect(deserializedPerson).toEqual(person);
  });
});
