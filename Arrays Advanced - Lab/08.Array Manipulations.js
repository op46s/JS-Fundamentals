function arrayManipulation(input) {

    function remove(number) {
        arrayOfNumbers = arrayOfNumbers.filter(num => num != number);
    }

    let arrayOfNumbers = input.shift().split(' ').map(Number);
    
        for (let i=0; i<input.length; i++) {
            let currentCommand = input[i].split(' ');

            switch (currentCommand[0]) {
                case 'Add': arrayOfNumbers.push(Number(currentCommand[1])); break;
                case 'Remove' : remove(currentCommand[1]); break;
                case 'RemoveAt' : arrayOfNumbers.splice(currentCommand[1], 1); break; 
                case 'Insert' :  arrayOfNumbers.splice(currentCommand[2], 0, Number(currentCommand[1])); break; 
            }
        }
        console.log(arrayOfNumbers.join(' '));
} 
arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 111 3']);
arrayManipulation(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3','Insert 6 2']);





