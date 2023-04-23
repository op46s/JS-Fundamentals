function train(input) {

    let personsInTheWagon = input.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(input.shift())

    
    for (let i = 0; i<input.length; i++) {
        let currentCommand = input[i].split(' ');
        if (currentCommand[0] == 'Add') {
            personsInTheWagon.push(Number(currentCommand[1]))
        } else {
            for (let j=0; j<personsInTheWagon.length; j++) {
                if (personsInTheWagon[j] + Number(currentCommand[0]) <= maxWagonCapacity) {
                    personsInTheWagon[j] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(personsInTheWagon.join(' '));
                    
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);