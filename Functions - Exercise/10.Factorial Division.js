function factorialDivision(number1, number2) {
    
    function findFactorial(num) {
        let newArr = [];
        for (i=num; i>=1; i--) {
            newArr.push(i)
        }
        return newArr;
    }
        let nOne = findFactorial(number1).reduce((accumulator, currentValue) => accumulator * currentValue);
        let nTwo = findFactorial(number2).reduce((accumulator, currentValue) => accumulator * currentValue);
    console.log((nOne/nTwo).toFixed(2))
}
//factorialDivision(5, 2);
factorialDivision(6, 2);



