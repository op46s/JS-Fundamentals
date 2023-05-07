function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let commands = arr.shift();
    let repairCheck = maxHealth * 0.2;

    while (commands != 'Retire') {

        let element = commands.split(' ')

        switch (element[0]) {
            case 'Fire':
                if (Number(element[1]) >= 0 && Number(element[1]) < warShip.length) {
                    warShip[Number(element[1])] -= Number(element[2]);
                    if (warShip[Number(element[1])] <= 0) {
                        console.log('You won! The enemy ship has sunken.')
                        return;
                    }
                }
                break;
            case 'Defend':
                if ((Number(element[1]) >= 0 && Number(element[1]) < pirateShip.length) && (Number(element[2]) >= 0 && Number(element[2]) < pirateShip.length)) {
                    for (let i = Number(Number(element[1])); i <= Number(element[2]); i++) {
                        pirateShip[i] -= Number(element[3]);
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                if (Number(element[1]) >= 0 && Number(element[1]) < pirateShip.length) {
                    pirateShip[Number(element[1])] += Number(element[2]);
                    if (pirateShip[Number(element[1])] > maxHealth) {
                        pirateShip[Number(element[1])] = maxHealth;
                    }
                }

                break;
            case 'Status':
                let repairCounter = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < repairCheck) {
                        repairCounter++;
                    }
                }
                console.log(`${repairCounter} sections need repair.`);
                break;
        }
        commands = arr.shift();
    }

    let pirateResult = pirateShip.reduce((a, b) => a + b);
    let warShipResult = warShip.reduce((a, b) => a + b);

    console.log(`Pirate ship status: ${pirateResult}`);
    console.log(`Warship status: ${warShipResult}`);
}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11", // index index damage
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);
console.log('....................................')
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]);