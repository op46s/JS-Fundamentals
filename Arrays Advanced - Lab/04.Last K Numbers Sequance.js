function lastKNumbersSequence(n, k) {

    let newArr = [1];
    
    for (let i=1; i<n; i++) {
    
        let cuttingIndex = Math.max(newArr.length-k, 0)
        let lastElements = newArr.slice(cuttingIndex)
        let sum = 0;
        for (const els of lastElements) {
            sum+=els; 
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' '))
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
