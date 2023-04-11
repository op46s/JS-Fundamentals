function simpleCalculator(a, b, operator) {

    // let divide = (a, b) => a / b;
    // let multiplyMe = (a, b) => a * b;
    // let add = (a, b) => a + b;
    // let subtract = (a, b) => a * b; 

    // console.log(divide(a, b));


    let result = 0;

    switch (operator) {
        case 'multiply': result = a * b; break;
        case 'divide': result = a / b; break;
        case 'add': result = a + b; break;
        case 'subtract': result = a - b; break;
    }
    console.log(result);
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');

