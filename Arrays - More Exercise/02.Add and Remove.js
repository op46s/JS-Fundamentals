function addAndRemove(inputArr) {

    let myArr = [];

    for (let i=0; i<inputArr.length;i++) {
        if (inputArr[i] === 'add') {
            myArr.push(i+1);
        } else {
            myArr.pop();
        }
    }
    myArr.length < 1 ? console.log('Empty') : console.log(myArr.join(' '));
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);