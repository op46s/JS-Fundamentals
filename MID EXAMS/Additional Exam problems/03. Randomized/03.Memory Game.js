function memoryGame(input) {

    let sequence = input.shift().split(' ');
    let elements = input.shift();
    let moves = 0;

    while (elements !== 'end') {

        let cur = elements.split(' ');
        let index1 = Number(cur[0]);
        let index2 = Number(cur[1]);

        moves++;

        if (checkValidIndex(cur, sequence)) {
            let index = Math.trunc(sequence.length / 2);
            sequence.splice(index, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        } else {

            if (sequence[index1] == sequence[index2]) {
                let element = sequence[index1];
                const sortedIndices = [index1, index2].sort((a, b) => b - a);
                sortedIndices.forEach((index) => {
                    sequence.splice(index, 1);
                });
                console.log(`Congrats! You have found matching elements - ${element}!`);
            } else if (sequence[index1] != sequence[index2]) {
                console.log("Try again!");
            }

        }
        function checkValidIndex(arr, seq) {
            if (arr[0] === arr[1] || arr[0] < 0 || arr[1] < 0 || arr[0] >= seq.length || arr[1] >= seq.length) {
                return true;
            } else {
                return false;
            }
        }
        elements = input.shift();

        if (sequence.length === 0) {
            break;
        }
    }
    if (sequence.length === 0 || sequence.length === 1) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log('Sorry you lose :(');
        console.log(sequence.join(' '));
    }
}
// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);