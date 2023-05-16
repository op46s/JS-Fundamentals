function convertToJSON(fName, lName, hColor) {

    let personData = {
        name: fName,
        lastName: lName,
        hairColor: hColor
    }
    let pDataToJSON = JSON.stringify(personData); 
    console.log(pDataToJSON);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond')