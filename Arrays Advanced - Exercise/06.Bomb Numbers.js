function bombNumbers(myArr, special) {

    let bombNumber = special[0];
    let power = special[1];

        for (let i=0; i<myArr.length; i++) {
            let checker = myArr[i];
                if (checker === bombNumber) {

                    let startIndex = Math.max(0, i-power)
                    let deleteCount = power * 2 + 1
                    myArr.splice(startIndex, deleteCount)
                }
        }        
        console.log(myArr.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1, 1, 1], [1, 0]);



