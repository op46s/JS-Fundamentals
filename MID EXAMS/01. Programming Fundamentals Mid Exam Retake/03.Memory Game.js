function memoryGame(input) {

    let theGame = input.shift().split(' ');
    let theMoves = input.shift();
    let moves = 0;

    while (theMoves != 'end') {
        moves++
        let myNum = theMoves.split(' ');
        let fNum = myNum[0];
        let sNum = myNum[1];

            if (theGame[fNum] != theGame[sNum] && (fNum > 0 || sNum > 0)) {
                console.log('Try again!');
            }

            if (fNum == sNum || fNum < 0 || sNum < 0) {
                let numToAdd = '-'+moves+'a';
                theGame.splice(Math.trunc(theGame.length/2), 0, numToAdd, numToAdd);
                console.log('Invalid input! Adding additional elements to the board');
            } 
            if (theGame[fNum] == theGame[sNum]) {

                index2 = theGame[sNum];
                theGame.splice(Number(fNum), 1);
                theGame.splice((theGame.indexOf(index2)), 1);
                console.log(`Congrats! You have found matching elements - ${index2}!`);

            } 

            if (theGame.length == 0) {
                break;
            }
           
        theMoves = input.shift();
    }
    if (theGame.length == 0) {
        console.log(`You have won in ${moves} turns!`)
    } else {
        console.log('Sorry you lose :(');
        console.log(theGame.join(' '))
    }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end" ]);
//memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);

