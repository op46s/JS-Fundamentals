function specialNumbers(myNum) {

    for (let i = 1; i <= myNum; i++) {

        let numToString = i.toString();
        let lengthOfString = numToString.length;
        let sum = 0;

            for (j = 0; j < lengthOfString; j++) {
                sum += Number(numToString[j]);
            }

        if (sum === 5 || sum === 7 || sum === 11) {
            if (i >= 10) {
                sum = i;
            }
            console.log(`${sum} -> True`);
        } else {
            if (i >= 10) {
                sum = i;
            }
            console.log(`${sum} -> False`);
        }

    }
}
specialNumbers(20);

