function condenseNumbers(nums) {

    let numbers = nums;
    let condensed = [];
    
    if (numbers.length == 1) {
        console.log(Number(nums));
    } else {
        while (numbers.length > 1) {
            condensed = [numbers.length-1];
            
            for (let i=0; i<numbers.length-1; i++) {
                condensed[i] = numbers[i] + numbers[i+1];
            }
            numbers = condensed;
            
        }

        console.log(Number(condensed));
    }
}
condenseNumbers([2,10,3]);
//condenseNumbers([5,0,4,1,2]);
//condenseNumbers([1]);