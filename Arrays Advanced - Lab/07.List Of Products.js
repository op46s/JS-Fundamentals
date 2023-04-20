function listOfProducts(products) {

    let sortedAndNumbered = products.sort((a, b) => a.localeCompare(b)).map((a, i) => (i+1)+'.'+a);
    //let sortedAndNumbered = products.sort().map((a, i) => (i+1)+'.'+a);
    console.log(sortedAndNumbered.join('\n'));
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);