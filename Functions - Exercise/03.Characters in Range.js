function charsInRange(a, b) {

    let myCharA = convertASCII(a)
    let myCharB = convertASCII(b)

    let myFirst = myMinNumber(myCharA, myCharB);
    let mySecond = myMaxNumber(myCharA, myCharB);

    let result = '';
    for (let i=myFirst+1; i<mySecond; i++) {
        result += convertASCIINumberToLetter(i) + concatenate();
    }

    console.log(result);

    function myMaxNumber(a, b) {
        return Math.max(a, b)
    }
    
    function myMinNumber(a, b) {
        return Math.min(a, b)
    }
    
    function convertASCII(aChar) {
        return aChar.charCodeAt(0)
    }
    
    function convertASCIINumberToLetter(num) {
        return String.fromCharCode(num)
    }
     
    function concatenate(string) {
        return ' ';
    }

}
charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');


