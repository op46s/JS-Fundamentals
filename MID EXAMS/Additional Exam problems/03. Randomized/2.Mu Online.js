function diabolo(input) {

    let data = input.split('|')
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;


    for (let i = 0; i < data.length; i++) {
        roomCounter++;
        let element = data[i].split(' ');

        let command = element[0];
        let amount = Number(element[1]);

        if (command === 'potion') {
            let missingHealth = 100 - health
            health += amount;
            if (health > 100) {
                health = 100;
                amount = missingHealth
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += amount;
            console.log(`You found ${amount} bitcoins.`)
        } else {
            health -= amount;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            } else {
                console.log(`You slayed ${command}.`);
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
//diabolo("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
diabolo("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")