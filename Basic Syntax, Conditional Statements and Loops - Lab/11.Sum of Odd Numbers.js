function sumOfOddNumbers(n) {

    let totalSum = 0;
    let counter = 0;

    for (let i = 1; i <= 100; i++) {
        
        if (i % 2 != 0){
            console.log(i);
            counter++;
            totalSum+=i;
        }

        if (counter == n) {
            console.log(`Sum: ${totalSum}`);
            break;
        }  
    }
}
sumOfOddNumbers(5);