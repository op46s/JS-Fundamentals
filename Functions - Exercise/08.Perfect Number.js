function perfectNumber(number) {

        let newArr = [];
        for (i=1; i<number; i++) {

            if (number % i === 0) {
                newArr.push(i)
            }
        }
        let result = newArr.reduce((acc, cur) => acc + cur);
        result == number ? console.log('We have a perfect number!') : console.log("It's not so perfect.")
}
perfectNumber(1236498);
perfectNumber(28);

