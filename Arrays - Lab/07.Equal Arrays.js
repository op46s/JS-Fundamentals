function equalArrays(arrayOne, arrayTwo) {
    
    let totalSum = 0;

    for (let i=0; i<arrayOne.length; i++) {
        if (Number(arrayOne[i]) !== Number(arrayTwo[i])) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            totalSum+=Number(arrayOne[i]);
        }
    }
    console.log(`Arrays are identical. Sum: ${totalSum}`);
}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);
