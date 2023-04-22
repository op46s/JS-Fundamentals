function smallestOfTwo(numbers) {

    //return numbers.sort((a, b) => a - b).slice(0, 2).join(' ');

    console.log(numbers.sort((a, b) => a - b).slice(0, 2).join(' '))
   
    let sortedSmallToBig = numbers.sort((a, b) => a - b);
    let firstTwoNumbers = sortedSmallToBig.slice(0, 2);
    console.log(firstTwoNumbers.join(' '));
}
smallestOfTwo([30, 15, 50, 5]);
smallestOfTwo([3, 0, 10, 4, 7, 3]);