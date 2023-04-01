function nonDecreasingSubject(arr) {

    let newArray = [];
    let biggest = 0;
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            newArray.push(biggest);
        } 
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubject([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubject([-43534523, 0, 543535]);
nonDecreasingSubject([20, 3, 2, 15, 6, 1]);