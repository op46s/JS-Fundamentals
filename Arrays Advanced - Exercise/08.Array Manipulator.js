function arrayManipulator(arrIntegers, arrStrings) {

    let strings = arrStrings.shift();

    while (strings != 'print') {
        let curElement = strings.split(' ');
        switch (curElement[0]) {
            case 'add' : arrIntegers.splice(curElement[1], 0, Number(curElement[2])); break;
            case 'contains' : console.log(arrIntegers.indexOf(Number(curElement[1]))); break;
            case 'addMany' : 
                let manyToAdd = curElement.slice(2, curElement.length).map(Number);
                // Combines Two arrays from certain element at the first 
                arrIntegers.splice(curElement[1], 0, ...manyToAdd); 
                break;
            case 'remove' : arrIntegers.splice(Number(curElement[1]), 1); break;
            case 'shift' : 
                for (let i=0; i<curElement[1]; i++) {
                    let elToAdd = arrIntegers.shift();
                    arrIntegers.push(elToAdd);
                } break;
            case 'sumPairs' : 
            let newArr = [];
                for (let i=0; i=arrIntegers.length; i++) {
                    if (arrIntegers.length == 1) {
                        newArr.push(arrIntegers[0]);
                        break;
                    }
                    newArr.push(arrIntegers[0]+arrIntegers[1]);
                    arrIntegers.shift()
                    arrIntegers.shift()
                } 
            arrIntegers = newArr; break;
        } 
        strings = arrStrings.shift();   
    }
    let arrToString = '[ ' +arrIntegers.join(', ')+ ' ]';
    console.log(arrToString);
}
// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print'])
// ;
// arrayManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
// ;
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
//arrayManipulator([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])