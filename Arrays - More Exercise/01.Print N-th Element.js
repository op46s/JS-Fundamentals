function printNthElement(inputArr) {

    let result = [];
    let step = Number(inputArr[inputArr.length-1]);

        for (let i=0; i<inputArr.length-1; i+=step) {
        
            result.push(inputArr[i]);
        }
        console.log(result.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);
//printNthElement(['dsa', 'asd', 'test', 'test', '2']);
//printNthElement(['1', '2', '3', '4', '5', '6']);