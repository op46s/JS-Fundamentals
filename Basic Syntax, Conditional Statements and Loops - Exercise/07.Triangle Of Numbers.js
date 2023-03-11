function triangleNumbers(number) {

    let dummy = '';

    for (let i = 1; i <=number; i++) {

        for (let j = 1; j <= i; j++) {
            dummy += i + ' ';
        }
        console.log(dummy);
        dummy = '';
    }
}
triangleNumbers(5);