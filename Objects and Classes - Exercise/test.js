function war(input) {

    pirateShip = input.shift().split('>').map(x => Number(x));
    warShip = input.shift().split('>').map(Number);

    maxHealthCapacity = Number(input.shift());
    let counterRepair = 0;
    for (const commandLines of input) {

        if (commandLines === 'Retire') {

            break;
        }

        let splitCommands = commandLines.split(' ');
        let command = splitCommands[0];
        let index = Number(splitCommands[1]);
        let damageEndIndexHealth = Number(splitCommands[2]);

        switch (command) {
            case 'Fire':
                if (warShip.indexOf(index != -1) && index < warShip.length) {
                    warShip[index] -= damageEndIndexHealth;
                }
                let indexZero = warShip.filter(x => x <= 0);

                if (indexZero[0] <= 0) {
                    console.log("You won! The enemy ship has sunken.")
                    return;
                }

                break;
            case 'Defend':
                let damage = Number(splitCommands[3]);

                if (pirateShip.indexOf(index != -1) && damageEndIndexHealth < pirateShip.length) {

                    for (let i = index; i <= damageEndIndexHealth; i++) {

                        pirateShip[i] -= damage
                    }
                }

                let checkIndex = pirateShip.filter(x => x <= 0);
                if (checkIndex[0] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }

                break;

            case 'Repair':

                if (pirateShip.indexOf(index > -1)) {

                    if (pirateShip[index] < maxHealthCapacity) {

                        pirateShip[index] += damageEndIndexHealth

                        if (pirateShip[index] > maxHealthCapacity) {
                            pirateShip[index] = maxHealthCapacity;
                        }
                    }
                }

                break;

            case 'Status':

                let sectionsNeedRepair = maxHealthCapacity * 0.20;

                for (let r = 0; r < pirateShip.length; r++) {

                    if (pirateShip[r] < sectionsNeedRepair) {
                        counterRepair++;
                    }

                }


                console.log(`${counterRepair} sections need repair.`);


                break;

        }

    }

    pirateShip = pirateShip.reduce((x, y) => x + y, 0);
    warShip = warShip.reduce((x, y) => x + y, 0);

    console.log(`Pirate ship status: ${pirateShip}`);
    console.log(`Warship status: ${warShip}`);

}

war(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
console.log('---------');

war(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])