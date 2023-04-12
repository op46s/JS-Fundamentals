function addAndSubtract(a, b, c) {

    let sumToNumbers = sum(a, b)
    let subtractToNumbers = subtract(sumToNumbers, c)
    return subtractToNumbers;

    function sum(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    }
    
}



console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));