function oddAndEvenSum(num) {

    let odd = 0;
    let even = 0;

    let numbersToArray = num.toString().split('');
    for (let i = 0; i < numbersToArray.length; i++) {

        let currentNumber = Number(numbersToArray[i])
        currentNumber % 2 === 0 ? even += currentNumber : odd += currentNumber
    }
    return `Odd sum = ${odd}, Even sum = ${even}`;
}
console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
