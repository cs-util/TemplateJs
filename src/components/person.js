// person.js
class Person {
    constructor(name, age) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error("Invalid name");
        }
        if (typeof age !== 'number' || age < 0) {
            throw new Error("Invalid age");
        }
        this.name = name.trim();
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    getAgeInMonths() {
        return this.age * 12;
    }

    canVote() {
        return this.age >= 18;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }

    static fromJSON(json) {
        const data = JSON.parse(json);
        return new Person(data.name, data.age);
    }
}

module.exports = Person;
