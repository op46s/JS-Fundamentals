function reverseNumbers(myNum, myArray) {

    let myNewArray = [];

    for (let i = myNum-1; i >= 0; i--) {
        myNewArray.push(myArray[i]);
    } 

    console.log(myNewArray.join(' '));
}
reverseNumbers(3, [10, 20, 30, 40, 50]);
reverseNumbers(4, [-1, 20, 99, 5]);
reverseNumbers(2, [66, 43, 75, 89, 47]);