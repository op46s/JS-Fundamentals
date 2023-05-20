function shootForTheWin(data) {

    let targets = data.shift().split(' ').map(Number);
    let indexes = data.shift();
    let shots = 0;

    while (indexes != 'End') {

        if (Number(indexes) >= 0 && Number(indexes) < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                let currentTarget = targets[Number(indexes)];
                if (i == Number(indexes)) {
                    continue;
                }

                if (targets[i] != -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget
                    } else {
                        targets[i] += currentTarget
                    }
                }
            }
            targets.splice(Number(indexes), 1, -1);
            shots++
        }
        indexes = data.shift();
    }
    console.log(`Shot targets: ${shots} -> ${targets.join(' ')} `);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);