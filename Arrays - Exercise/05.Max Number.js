function maxNumber(inputArray) {

    let result = [];
    let maxNum = 0;

    for (i=0; i<=inputArray.length; i++) { 

        maxNum = Math.max(...inputArray);
        if (inputArray[i] > inputArray[i+1]) {
            result.push(inputArray[i]);
        }
        if (i == inputArray.length-1)  {
            result.push(inputArray[i]);
        } 

        if (i == inputArray.length-1 && inputArray[i] == maxNum) {
            console.log(maxNum);
            return;
        }
    }
    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);


