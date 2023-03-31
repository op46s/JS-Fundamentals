function maxSequence(arr) {

    let longestArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentSequence = [arr[i]];

        for (j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                currentSequence.push(arr[j]);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestArr.length) {
            longestArr = currentSequence;
        }
    }
    console.log(longestArr.join(' '));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
//maxSequence([4, 4, 4, 4]);
//maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);