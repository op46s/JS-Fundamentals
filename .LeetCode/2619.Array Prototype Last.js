var reduce = function(nums, fn, init) {

    if (nums.length === 0) {
        return init;
    } else {
        let result = 0;
        for (let i=0; i<nums.length; i++) {
            result = fn(init, nums[i]);
            init = result;
            
        }
        console.log(result);
    }
};
//reduce([1,2,3,4], function sum(acc, curr) { return acc + curr; }, 0);
reduce([1,2,3,4], function sum(acc, curr) { return acc + curr * curr; }, 100);
//reduce([], function sum(acc, curr) { return 0; }, 25);