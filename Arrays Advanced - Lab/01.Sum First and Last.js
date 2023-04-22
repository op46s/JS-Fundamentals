function sumFirstAndLast(nums) {


    // Short Version - Not recommended.
    // console.log(Number(nums[0]) + Number(nums.pop()));

    let firstNumber = Number(nums[0]);
    let lastNumber = Number(nums.pop());
    let sum = firstNumber + lastNumber

    console.log(sum);

}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
sumFirstAndLast(['5']);
