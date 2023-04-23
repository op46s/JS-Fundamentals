function distinctArrays(arr) {

    const newArr = [];

    for (let i = 0; i <arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) { // Returns -1 if not present.
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
 
}
distinctArrays([1, 2, 3, 4]);
distinctArrays([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArrays([20, 8, 12, 13, 4, 4, 8, 5]);