function convertToJSON(fName, lName, hColor) {

    let person = {
        name: fName,
        lastName: lName,
        hairColor: hColor,
    }
    return JSON.stringify(person);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');