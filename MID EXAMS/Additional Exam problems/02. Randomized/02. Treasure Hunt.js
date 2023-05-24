function treasureHunt(array) {

    let initialLoot = array.shift().split('|');
    let command = array.shift();

    while (command != 'Yohoho!') {
        let currentCommand = command.split(' ')

        switch (currentCommand[0]) {
            case 'Loot':
                currentCommand.shift();
                for (let i = 0; i < currentCommand.length; i++) {
                    if (!initialLoot.includes(currentCommand[i])) {
                        initialLoot.unshift(currentCommand[i])
                    }
                }
                break;
            case 'Drop':
                let index = Number(currentCommand[1])
                if (initialLoot[index] != undefined) {
                    let addAtTheEnd = initialLoot[index];
                    initialLoot.splice(index, 1);
                    initialLoot.push(addAtTheEnd)
                }
                break;
            case 'Steal':
                let itemsToRemove = Number(currentCommand[1])
                if (itemsToRemove >= initialLoot.length) { //Possible error here.
                    itemsToRemove = initialLoot.length;
                }
                console.log((initialLoot.slice(initialLoot.length - itemsToRemove).join(', ')));
                initialLoot = initialLoot.slice(0, initialLoot.length - itemsToRemove);
                break;
        }
        command = array.shift();
    }

    if (initialLoot.length == 0) {
        console.log('Failed treasure hunt.');
    } else {
        let lengthOfArray = initialLoot.join('').length;
        console.log(`Average treasure gain: ${(lengthOfArray / initialLoot.length).toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);
// treasureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"
// ]);