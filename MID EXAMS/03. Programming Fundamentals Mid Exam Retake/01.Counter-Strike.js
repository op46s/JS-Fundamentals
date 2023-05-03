function counterStrike(arr) {

    let energy = Number(arr.shift());
    let eob = false;
    let winCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        let distance = arr[i];
        if (distance === 'End of battle') {
            eob = true;
            break;
        }
        if (energy >= Number(distance)) {
            winCounter++;
            energy -= Number(distance);
        } else {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
            return;
        }

        if (winCounter % 3 == 0) {
            energy += winCounter;
        }
    }

    if (eob || energy >= 0) {
        console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
counterStrike(["40", "13", "10", "10", "10"]);
