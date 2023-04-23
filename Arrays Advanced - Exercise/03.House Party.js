function houseParty(input) {

    let newList = [];

    for (let i=0; i<input.length; i++) {
        let currentPerson = input[i].split(' '); 
            if (currentPerson[2] != 'not') {
                if (!newList.includes(currentPerson[0])) {
                    newList.push(currentPerson[0]); 
                } else {
                    console.log(`${currentPerson[0]} is already in the list!`);
                }
            } else {
                if (newList.includes(currentPerson[0])) {
                       newList.splice(newList.indexOf(currentPerson[0]), 1);
                } else {
                    console.log(`${currentPerson[0]} is not in the list!`);
                }
                
            }
    }
     console.log(newList.join('\n'));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']); 