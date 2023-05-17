function convertToObject(str) {

    let myObject = JSON.parse(str);
    let objKeys = Object.keys(myObject);

    for (let keys of objKeys) {
        console.log(`${keys}: ${myObject[keys]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');