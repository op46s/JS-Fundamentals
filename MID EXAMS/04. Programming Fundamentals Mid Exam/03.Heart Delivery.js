function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(Number);
    let jumps = input.shift();
    let failedCounter = 0;
    let lastPosition = 0;

    while (jumps != 'Love!') {
        let jumpLengths = jumps.split(' ');
        let index = Number(jumpLengths[1]);
        index+=lastPosition;
        
        if (index >= neighborhood.length) {
            index = 0;
        }
        if (neighborhood[index] === 0){
            console.log(`Place ${index} already had Valentine's day.`)
        } else {
            neighborhood[index] -= 2
            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }
        }
       
        lastPosition = index;
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
console.log('.......................................')
heartDelivery(["2@4@2",
                "Jump 2",
                "Jump 2",
                "Jump 8",
                "Jump 3",
                "Jump 1",
                "Love!"
]); 