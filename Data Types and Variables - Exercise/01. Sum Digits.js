function digitsSum(number) {

    let numToString = number.toString();
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i])
    }
    console.log(sum);

}
digitsSum(245678)