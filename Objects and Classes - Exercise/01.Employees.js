function employee(array) {

    class Person {
        constructor(name, personalNumber) {
            this.name = name;
            this.number = personalNumber;
        }
        toLog() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`)
        }

    }

    for (let name of array) {
        let newPerson = new Person(name, name.length)
        newPerson.toLog();
    }
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employee([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);