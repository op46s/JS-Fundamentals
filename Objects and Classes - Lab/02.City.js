function city(obj) {

    let objToArr = Object.keys(obj);
        for(let i=0; i<objToArr.length; i++) {
            let keys = objToArr[i];
            let values = obj[keys]
            console.log(`${keys} -> ${values}`)
        }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});