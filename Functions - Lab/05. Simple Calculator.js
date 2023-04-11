function simpleCalculator(a, b, operator) {

    const calculate = (num1, num2, operator) => ({
        'multiply': () => num1 * num2,
        'divide': () => num1 / num2,
        'add': () => num1 + num2,
        'subtract': () => num1 - num2
      })[operator]();

    console.log(calculate(a, b, operator));
    
    // let result = 0;

    // switch (operator) {
    //     case 'multiply': result = a * b; break;
    //     case 'divide': result = a / b; break;
    //     case 'add': result = a + b; break;
    //     case 'subtract': result = a - b; break;
    // }
    // console.log(result);
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');

