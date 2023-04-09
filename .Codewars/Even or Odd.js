function evenOrOdd(number) {

    let result = '';
    number % 2 === 0 ? result = 'Even' : result = 'Odd';
    console.log(result);
}
evenOrOdd(2)