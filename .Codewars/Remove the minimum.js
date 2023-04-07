function removeSmallest(numbers) {
    
    let arr = numbers.map(x => x)
    let theIndex = arr.indexOf(Math.min(...arr));
    let dummy = arr.splice(theIndex, 1);
    console.log(arr); 
}
removeSmallest([1,2,3,4,5]);
removeSmallest([5,3,2,1,4]);
removeSmallest([2,2,1,2,1]);