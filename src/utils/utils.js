function add(a, b) {
    return a + b;
}

function tellBirthday(person) {
    return `${person.introduce()} I was born in ${person.getBirthYear()}.`;
}

module.exports = { add, tellBirthday };
