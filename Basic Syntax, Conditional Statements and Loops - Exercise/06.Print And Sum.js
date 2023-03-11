function printSum(start, end) {

    let totalSum = 0;
    let numbers = '';

    for (let i = start; i <= end; i++) {
        numbers += i + ' ';
        totalSum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${totalSum}`);
}
printSum(5, 10);
// printSum(0, 26);
// printSum(50, 60);
