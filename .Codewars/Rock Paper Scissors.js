const rps = (p1, p2) => {

    let winner = '';

    if (p1 === p2) {
    console.log('Draw!');
    } else {
       if (p1 == 'scissors' && p2 == 'paper') {
            winner = 'Player 1';  
       } else if (p1 == 'scissors' && p2 == 'rock') {
            winner = 'Player 2';
       } else if (p1 == 'rock' && p2 == 'paper') {
            winner = 'Player 2';
       } else if (p1 == 'rock' && p2 == 'scissors') {
            winner = 'Player 1';
       } else if (p1 == 'paper' && p2 == 'scissors') {
        winner = 'Player 2';
       } else if (p1 == 'paper' && p2 == 'rock') {
        winner = 'Player 1';
       }
       console.log(winner);
    } 
}
rps("scissors", "paper"); // Player 1
rps("scissors", "rock"); // Player 2
rps("paper", "scissors"); // Draw
rps("rock", "paper"); 
rps("paper", "paper");