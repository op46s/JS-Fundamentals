function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);
    let elements = input.shift();

    while (elements != "End") { 
        let commands = elements.split(' ') ;
        let index = Number(commands[1]);
        
        switch (commands[0]) {
            case 'Shoot': 
                if (targets.indexOf(targets[index]) != -1) {
                    targets.splice(index, 1, (targets[index] - Number(commands[2])));
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
            break;
            case 'Add' :
                if (targets.indexOf(targets[index]) != -1) {
                    targets.splice(index, 0, Number(commands[2]));
                } else {
                    console.log('Invalid placement!')
                }
            break;
            case 'Strike' :
                if (targets.indexOf(targets[index]) == -1) {
                    console.log('Strike missed!');
                } else {
                    for (let i = (Number(commands[1])-Number(commands[2])); i<=(Number(commands[1])+Number(commands[2])); i++) {
                        if (targets.indexOf(targets[i]) == -1) {
                            console.log('Strike missed!');
                            break;
                        } else {
                            targets.splice((Number(commands[1])-Number(commands[2])), (Number(commands[2])+Number(commands[2])+1));
                            break;
                        }
                    }
                }
                
            break;
        }
        elements = input.shift();
    } 
    console.log(targets.join('|'));  
}
movingTarget(["52 74 23 44 96 110",
                "Shoot 5 10",
                "Shoot 1 80",
                "Strike 2 1",
                "Add 22 3",
                "End"
]);
movingTarget(["1 2 3 4 5",
                "Strike 0 1",
                "End"
]);