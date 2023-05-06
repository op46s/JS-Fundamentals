function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(Number);
    let jumps = input.shift();
    let lastPosition = 0;
    let failedCounter = 0;
    let counter = 0;
    

    while (jumps != 'Love!') {
        counter++;
        let jumpLengths = jumps.split(' ');
        let length = Number(jumpLengths[1]);
        
        if (counter == 1) {
            length = Number(jumpLengths[1])
        } else {
            length+=lastPosition;
        }

        if (length > neighborhood.length) {
            length = 0;
        }
       
        for (let i=length; i<neighborhood.length; i++) {
            if (neighborhood[length] == 0) {
                console.log(`Place ${length} already had Valentine's day.`);
                break;
            } else {
                neighborhood.splice(i, 1, neighborhood[length]-2);
                if (neighborhood[length] == 0) {
                    console.log(`Place ${length} has Valentine's day.`);
                }
                break;
            }
        }
        lastPosition = length;
        jumps = input.shift();
    }

    for (let i=0; i<neighborhood.length; i++) {
        if (neighborhood[i] != 0){
            failedCounter++;
        } 
    }

   

    console.log(`Cupid's last position was ${lastPosition}.`)
    if (failedCounter == 0) {
        console.log('Mission was successful.')
    } else {
        console.log(`Cupid has failed ${failedCounter} places.`)
    }
}
heartDelivery(["10@10@10@2",
                "Jump 1",
                "Jump 2",
                "Love!"
]);
heartDelivery(["2@4@2",
                "Jump 2",
                "Jump 2",
                "Jump 8",
                "Jump 3",
                "Jump 1",
                "Love!"
]); 