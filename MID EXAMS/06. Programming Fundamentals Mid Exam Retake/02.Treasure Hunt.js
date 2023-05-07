function treasureHunt(arr) {

    let loot = arr.shift().split('|');
    let hunt = arr.shift();

    while (hunt != 'Yohoho!') {

        let commands = hunt.split(' ')

        switch (commands[0]) {
            case 'Loot':
                commands.shift();
                for (let i = 0; i < commands.length; i++) {
                    if (!loot.includes(commands[i])) {
                        loot.unshift(commands[i]);
                    }
                }
                break;
            case 'Drop':
                if (commands[1] >= 0 && commands[1] <= loot.length) { // Checking if the index exist
                    let addMe = loot.splice(Number(commands[1]), 1);
                    loot.push(addMe[0])
                }
                break;
            case 'Steal':
                // testing with ['trans', 'pedal'].length< [3]
                let stolenItems = [];
                if (loot.length < commands[1]) {
                    stolenItems = loot;
                    loot = [];
                } else {
                    stolenItems = loot.splice(loot.length - commands[1], commands[1]);
                }
                console.log(stolenItems.join(', '));
                break;
        }
        hunt = arr.shift();
    }
    let totalSumLengths = 0;
    for (let i = 0; i < loot.length; i++) {
        totalSumLengths += loot[i].length;
    }
    if (loot.length == 0) {
        console.log('Failed treasure hunt.')
    } else {
        console.log(`Average treasure gain: ${(totalSumLengths / loot.length).toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Medallion|Cup",
    "Steal 3",
    "Yohoho!"
]);
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//                 "Loot Wood Gold Coins",
//                 "Loot Silver Pistol",
//                 "Drop 3", // Drop 3
//                 "Steal 3",
//                 "Yohoho!"
// ]);
// treasureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"]);