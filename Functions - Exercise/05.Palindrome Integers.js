function palindrome(arr) {

        for (let i=0; i<arr.length; i++) {
           arr[i].toString().split('').reverse().join('') == arr[i] ? console.log('true') : console.log('false')
        }
}
palindrome([123,323,421,121]);
//palindrome([32,2,232,1010]);
