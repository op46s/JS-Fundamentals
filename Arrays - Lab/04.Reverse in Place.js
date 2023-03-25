function reversed(myString) {


    // One row solution. reverse the array, then use .join(' '), to split the 
    // string ]with one single space between the elements.

                // let myArr = myString.reverse().join(' ');

    let result = '';
    let myArr = myString.reverse();

    for (let i = 0; i <= myArr.length-1; i++) {
        result += myArr[i] + ' ';
    }
    console.log(result);
}
//reversed(['a', 'b', 'c', 'd', 'e']);
reversed(['abc', 'def', 'hig', 'klm', 'nop']);
//reversed(['33', '123', '0', 'dd']);




