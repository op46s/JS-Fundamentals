function processOddNums(arr) {



   return arr.filter((a, i) => i % 2 != 0).map(a => a*2).reverse().join(' ') 

}
processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);


