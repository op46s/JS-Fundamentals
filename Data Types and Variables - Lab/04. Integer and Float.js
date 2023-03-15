function intAndFloat(num1, num2, num3) {

    let result = '';
    let sum = num1 + num2+ num3;
    if (sum % 1 === 0) {
        result = 'Integer'
    } else {
        result = 'Float'
    }
    console.log(`${sum} - ${result}`);
}
intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);