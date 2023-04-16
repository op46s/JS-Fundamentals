function numbersModification(num) {

    function sumNumbers(arr) {

        let myNewArr = [];
        for (let i = 0; i < arr.length; i++) {
            myNewArr.push(Number([arr[i]]))
        }
        let result = myNewArr.reduce((accumulator, currentValue) => accumulator + currentValue);
        return result;
    }

    let myNumber = num.toString().split('');
    for (let i = 0; i < myNumber.length; i++) {

        if (sumNumbers(myNumber) / myNumber.length <= 5) {
            myNumber.push('9')
        }

    }
    console.log(myNumber.join(''))
}
numbersModification(101)
numbersModification(5835)

