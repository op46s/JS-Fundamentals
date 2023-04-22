function arrayManipulation(input) {

    let arrayOfNumbers = input.shift().split(' ').map(Number);
    
        for (let i=0; i<input.length; i++) {
            let currentCommand = input[i].split(' ');

            switch (currentCommand[0]) {
                case 'Add': arrayOfNumbers.push(Number(currentCommand[1])); console.log(arrayOfNumbers); break;
                case 'Remove' : let removedNumber = arrayOfNumbers.filter(a => a !== Number(currentCommand[1])); console.log(removedNumber); break; 
                case 'RemoveAt' : arrayOfNumbers.splice(arrayOfNumbers.indexOf(currentCommand[1]), 1); break; 
                //case 'Insert' : 
            }
        
        }

        console.log(arrayOfNumbers);
} 
arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
// arrayManipulation(['6 12 2 65 6 42',
// 'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2']);
