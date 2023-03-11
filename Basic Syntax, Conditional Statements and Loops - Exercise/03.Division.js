function division(number) {

    let maxNumber = 0;

    if (number % 10 === 0) {
        maxNumber = 10;
    } else if (number % 7 === 0) {
        maxNumber = 7;
    } else if (number % 6 === 0) {
        maxNumber = 6;
    } else if (number % 3 === 0) {
        maxNumber = 3;
    } else if (number % 2 === 0) {
        maxNumber = 2;
    } else {
       console.log('Not divisible')
    return;    
    }
    console.log(`The number is divisible by ${maxNumber}`);
}
division(-2);