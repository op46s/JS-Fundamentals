function passwordValidator(password) {

    let passwordIsValid = true;

    let myArr = password.split('');

        if (myArr.length < 6 || myArr.length > 9) {
            console.log('Password must be between 6 and 10 characters');
            passwordIsValid = false;
        }

    let regExpLettersNumbers = /^[a-zA-Z\d]+$/;

        if (!regExpLettersNumbers.test(password)) {
            console.log('Password must consist only of letters and digits')
            passwordIsValid = false;
        }

    let numbersCounter = 0;

        for (let i = 0; i < myArr.length; i++) {
            if (!isNaN(Number(myArr[i]))) {
                numbersCounter++;
            }
        }
        
    if (numbersCounter < 2) {
        console.log('Password must have at least 2 digits');
        passwordIsValid = false;
    }
    if (passwordIsValid == true) {
        console.log('Password is valid')
    }
}
passwordValidator('aaaaaa');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');