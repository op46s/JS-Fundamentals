function twoSum(arr, target) {

    let myArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[i] + arr[j] === target && i != j) {
                myArr.push(i, j);
                console.log(myArr);
                return;
            }
        }
    }
}
twoSum([2, 7, 11, 15], target = 9);
//twoSum([3,2,4], target = 6);
//twoSum([3,3], target = 6);
//twoSum([3,2,3], target = 6);
//twoSum([2,5,5,11], target = 10);
//twoSum([1,3,4,2], target = 6);
