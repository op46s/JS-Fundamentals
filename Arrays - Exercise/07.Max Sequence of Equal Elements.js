function maxSequence(arr) {

    let newArr = [];
    let counter = 0;

    for (let i=0; i<arr.length; i++) {

        

        if (arr[i] == arr[i+1]) {
            counter++;
            newArr.push(arr[i]);
        }




    }

    





    console.log(newArr);
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
//maxSequence([4, 4, 4, 4]);
//maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);