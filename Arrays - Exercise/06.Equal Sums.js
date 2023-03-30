function equalSums(inputArray) {

   
    let result = 'no' 

    for (let i=0; i<inputArray.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
    
        for (let j=0; j<i; j++) {
            sumRight += inputArray[j];
        }

        for (let k=inputArray.length-1; k>i; k--) {
            sumLeft += inputArray[k];
        }

        if (sumLeft === sumRight) {
            result = i;
        }

    }


    console.log(result);

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);