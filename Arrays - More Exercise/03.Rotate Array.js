function rotateArray(inputArr) {

    let rotationStep = inputArr.pop();
    for (let i=0; i<rotationStep; i++) {
        let mine = inputArr.pop();
        inputArr.unshift(mine);      
    }
    console.log(inputArr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);