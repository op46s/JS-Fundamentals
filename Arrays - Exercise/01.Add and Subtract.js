function addAndSubtract(inputNumbers) {

let resultArr =[];
let totalSumOriginalArray = 0;
let totalSumNewArray = 0;

    for (let i=0; i<inputNumbers.length; i++) {
        totalSumOriginalArray += inputNumbers[i];
        inputNumbers[i] % 2 === 0 ? resultArr.push(inputNumbers[i]+i) : resultArr.push(inputNumbers[i]-i);
    }

    for (let i=0; i<resultArr.length; i++){
        totalSumNewArray += resultArr[i];
    }

console.log(resultArr);
console.log(totalSumOriginalArray);
console.log(totalSumNewArray);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);