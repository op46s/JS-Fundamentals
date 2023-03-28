function mergeArrays(inputArr1, inputArr2) {

    let printArray = [];
    for (let i=0; i<inputArr1.length; i++) {

        i % 2 === 0 ? printArray.push(Number(inputArr1[i]) + Number(inputArr2[i])) : printArray.push(`${inputArr1[i]}${inputArr2[i]}`);   
    }
    console.log(printArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
//mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);