function charsInRange(a, b) {

    let myMaxNumber = (a, b) => Math.max(a, b)
    let myMinNumber = (a, b) => Math.min(a, b)
    let convertASCII = (aChar) => aChar.charCodeAt(0)
    let concatenate = (a) => a = ' ';
    let convertASCIINumberToLetter = (num) => String.fromCharCode(num)

    let myCharA = convertASCII(a)
    let myCharB = convertASCII(b)

    let myFirst = myMinNumber(myCharA, myCharB);
    let mySecond = myMaxNumber(myCharA, myCharB);

    let result = '';
    for (let i = myFirst + 1; i < mySecond; i++) {
        result += convertASCIINumberToLetter(i) + concatenate();
    }
    console.log(result);
}
charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');


