var addTwoNumbers = function(l1, l2) {

        let result = (Number(l1.join('')) + Number(l2.join(''))).toString().split('').reverse().map(Number); 
        console.log(result);
}
addTwoNumbers(l1 = [2,4,3], l2 = [5,6,4]);
addTwoNumbers(l1 = [0], l2 = [0]);
addTwoNumbers(l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]);
addTwoNumbers(l1 = [2,4,9], l2 = [5,6,4,9]); // Expected [7,0,4,0,1]



