function firstAndLastKNumbers(numbers) {

    let kNumber = numbers[0];

    console.log(numbers.slice(1, kNumber+1).join(' '));   
    console.log(numbers.slice((numbers.length)-kNumber, numbers.length).join(' '))     

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);