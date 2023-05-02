function counterStrike(arr) {

    let energy = Number(arr.shift());
    let distance = arr.shift();
    let wins = 0;

        while(distance != "End of battle") { 

            
            
            energy -= Number(distance);
            wins++;

            if (wins % 3 == 0) {
                energy += wins;
            }
            
            if (energy == 0) {
                distance = arr.shift();
                if (distance != undefined) {
                    console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
                    return;
                } else {
                    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
                    return;
                }
                
            }
            distance = arr.shift();
        }
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
counterStrike(["40", "13", "10", "10", "10"]);
