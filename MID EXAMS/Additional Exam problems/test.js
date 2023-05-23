class Shape {

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age
    }
    callPerimeter() {
        console.log(this.name, this.surname, this.age)
    }

}
let myNames = ['Ivan Petrov 23', 'George Michael 43', 'Michael Donovan 55', 'Dorin Joke 24', 'Alex Porter 54', 'Joe Colins 12', 'Martin Dallin 44', 'Valery Porter 91', 'Pony Horse 21']

for (let i = 0; i < myNames.length; i++) {
    let [name, surname, age] = myNames[i].split(' ')
    let addName = new Shape(name, surname, age)
    addName.callPerimeter()
}



