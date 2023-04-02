function findAverage(array) {

    let sum = 0;
    for (let i=0; i<array.length; i++) {
        sum += array[i];
    }
    sum == 0 ? console.log(0) : console.log(sum / array.length);
}
findAverage([1,2,3])
findAverage([])