function calculator(firstNumber, operator, secondNumber) {

    let calculation = 0;

    switch (operator) {
        case '+': calculation = firstNumber + secondNumber; break;
        case '-': calculation = firstNumber - secondNumber; break;
        case '/': calculation = firstNumber / secondNumber; break;
        case '*': calculation = firstNumber * secondNumber; break;
    }

   console.log(calculation.toFixed(2));

}
calculator(5, '+', 10);
calculator(25.5, '-', 3);