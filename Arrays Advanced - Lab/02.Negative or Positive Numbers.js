function negativeOrPositiveNumbers (nums) {

    let newArr = [];

    for (let i =0; i<nums.length; i++) {
        nums[i] < 0 ? newArr.unshift(nums[i]) : newArr.push(nums[i]);
    }
    console.log(newArr.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);