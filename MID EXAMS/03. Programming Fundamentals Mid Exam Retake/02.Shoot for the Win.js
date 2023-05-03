function shoot(input) {

    let sequence = input.shift().split(' ').map(Number);
    let targets = input.shift();
    let shootCounter = 0;

        while (targets != 'End') {
            let indexes = Number(targets);
        
            if (indexes >= 0 && indexes < sequence.length) {

                for (let i=0; i<sequence.length; i++) {
                    
                    let myNum = sequence[indexes];
                
                    if (i == indexes) {
                        continue;
                    }

                    if (sequence[i] != -1) {
                        if (sequence[i] > myNum) {
                            sequence[i] -= myNum; 
                        } else {
                            sequence[i] += myNum
                        }
                        
                    } 
                }
                sequence.splice(indexes, 1, -1);
                shootCounter++;
            }
            targets = input.shift();
        }

    console.log(`Shot targets: ${shootCounter} -> ${sequence.join(' ')} `);
}
shoot(["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"
]);

// shoot(["30 30 12 60 54 66",
//         "5",
//         "2",
//         "4",
//         "0",
//         "End"
// ]);
