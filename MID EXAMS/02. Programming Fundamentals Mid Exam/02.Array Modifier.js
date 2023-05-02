function arrayModifier(arr) {

    let numbersArr = arr.shift().split(' ').map(Number);
    let elements = arr.shift();
    let newArr;

    while(elements !== 'end') {
        let commands = elements.split(' ');

        let index1 = Number(commands[1]);
        let index2 = Number(commands[2]);
        let swap1 = numbersArr[index2];
        let swap2 = numbersArr[index1];

        switch (commands[0]) {
            //Swap positions of two elements in an array;
            case 'swap' : 
            numbersArr.splice(index1, 1, swap1);
            numbersArr.splice(index2, 1, swap2);
            break;
            //Multiply and element at certain index with another element at certain index
            case 'multiply' :
            let multiplied = swap1 * swap2;
            numbersArr.splice(index1, 1, multiplied);
            break;
            case 'decrease' : 
            newArr = numbersArr.map(a => a-1);
            numbersArr = newArr;
            break;
        }
        elements = arr.shift()
    }
console.log(newArr.join(', '));
}
// arrayModifier([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);