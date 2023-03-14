function sortNumbers(numOne, numTwo, numThree) {

    let numbers = [numOne, numTwo, numThree];

    numbers.sort(function(a, b) {
      return b - a;
    });

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
      }

} 
sortNumbers(2, 1, 3);
//sortNumbers(-2, 1, 3);