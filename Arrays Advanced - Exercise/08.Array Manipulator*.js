function arrayManipulator(arrIntegers, arrStrings) {

    let strings = arrStrings.shift();

    while (strings != 'print') {
        let curElement = strings.split(' ');
       
        switch (curElement[0]) {
            case 'add' : arrIntegers.splice(curElement[1], 0, Number(curElement[2])); break;
            case 'contains' : console.log(arrIntegers.indexOf(Number(curElement[1]))); break;
            case 'addMany' : 
                let manyToAdd = curElement.slice(2, curElement.length).map(Number);
                for (const el of manyToAdd) {
                    arrIntegers.splice(curElement[1]+1, 0, el)          
                }
                console.log(arrIntegers) 

            break;
        } 
        strings = arrStrings.shift();
        console.log(arrIntegers);
    }

    
}
// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print'])
// ;
arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
;