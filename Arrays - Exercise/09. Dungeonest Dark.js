function diaboloFour(rooms) {

    let roomsToArr = rooms.toString().replaceAll('|', ',').replaceAll(' ', ',').split(',');

    let healthBar = 100;
    let coins = 0;
    let bestRoom = 1;

    for (let i = 0; i<roomsToArr.length; i++) {

        let unit = roomsToArr[i];
        let amount = Number(roomsToArr[i+1]);

        // Potion business logic.
        if (unit === 'potion') {
            let currentHealth = healthBar
            healthBar += amount;
            if (healthBar > 100) {
                healthBar = 100;
                amount = 100 - currentHealth;
            } else {

            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${healthBar} hp.`);
        }

        // Coins Business Logic
        else if (unit === 'chest') {
            coins+=amount;
            console.log(`You found ${amount} coins.`);
        } else {
            healthBar -= amount;
            if (healthBar > 0) {
                console.log(`You slayed ${unit}.`);
            } else {
                healthBar -= amount;
                console.log(`You died! Killed by ${unit}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
        i++;
    }

    if (healthBar > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${healthBar}`);
    }
}
diaboloFour(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//diaboloFour(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);