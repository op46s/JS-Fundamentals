function amazingNumbers(myNumber) {

    let numToString = myNumber.toString();
    sum = 0;

    for (i = 0; i < numToString.length; i++) {
        let currentNum = Number(numToString[i]);
        sum += currentNum;
    }
    
    let result = sum.toString().includes('9');
    let trueOrFalse =  '';
    result === true ? trueOrFalse = 'True' : trueOrFalse = 'False';
    console.log(`${myNumber} Amazing? ${trueOrFalse}`);

}
amazingNumbers(583472);