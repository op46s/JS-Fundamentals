function numbers(input) {

    let inputArr = input.split(' ').map(Number);
    let average = inputArr.reduce((a, b) => a+b) / inputArr.length;

    let result = inputArr.filter(a => a>average).sort((a, b) => b-a);
    let topFive = result.slice(0, 5);

        if (average == Number(input) || result.length == 0) {
            console.log('No');
        } else {
            console.log(topFive.join(' '));
        }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('0 1');
numbers('-1 -2 -3 -4 -5 -6');