function evenAndOddSubs(myArray) {

    let even = 0;
    let odd = 0;

    for (let i=0; i<myArray.length; i++) {

        let elementToNumber = Number(myArray[i]);

        if (elementToNumber % 2 === 0) {
            even += elementToNumber; 
        } else {
            odd += elementToNumber;
        }
    }
        console.log(even-odd);

}
evenAndOddSubs([1,2,3,4,5,6]);
evenAndOddSubs([3,5,7,9]);
evenAndOddSubs([2,4,6,8,10]);