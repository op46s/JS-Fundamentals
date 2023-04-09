function positiveSum(arr) {
    
 
    return arr.reduce((acc, cur) => cur > 0 ? cur + acc : acc, 0);


}
positiveSum([1,-4,7,12]);