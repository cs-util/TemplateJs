// person.js
export class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Returns a brief introduction.
    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  
    // Calculates the birth year based on the current year.
    getBirthYear() {
      return new Date().getFullYear() - this.age;
    }
  }
  