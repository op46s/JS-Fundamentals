function manOWar(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealthCapacity = Number(input.shift());
    let repairCheck = maxHealthCapacity * 0.2;
    let elements = input.shift()

    while (elements != 'Retire') {

        let command = elements.split(' ');

        switch (command[0]) {
            case 'Fire':
                let index = Number(command[1])
                let damage = Number(command[2])
                if (index >= 0 && index < warShip.length) {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);
                let theDamage = Number(command[3]);
                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= theDamage;
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                let idx = Number(command[1]);
                let health = Number(command[2]);
                if (idx >= 0 && idx < pirateShip.length) {
                    pirateShip[idx] += health;
                    if (pirateShip[idx] > maxHealthCapacity) {
                        pirateShip[idx] = maxHealthCapacity;
                    }
                }
                break;
            case 'Status':
                let sectionsToBeRepaired = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < repairCheck) {
                        sectionsToBeRepaired++
                    }
                }
                console.log(`${sectionsToBeRepaired} sections need repair.`);
                break;
        }

        elements = input.shift()
    }

    let sumPirateShip = pirateShip.reduce((a, b) => a + b);
    let sumWarShip = warShip.reduce((a, b) => a + b);

    console.log(`Pirate ship status: ${sumPirateShip}`);
    console.log(`Warship status: ${sumWarShip}`);
}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);
// manOWar(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"
// ]);