function sorting(arr) {

    let sortedArray = [];
    arr.sort((a, b) => a-b);

    while (arr.length !== 0) {
        sortedArray.push(arr.pop(), arr.shift());
        arr.slice(1, arr.length-1);
    }
    console.log(sortedArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
//sorting([1, 2])
