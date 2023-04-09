function oddOrEven(array) {

   

    console.log(array[0] === undefined ? 'even' : array.reduce((a, b) => a+b) % 2 === 0 ? 'even' :'odd'); 

    //console.log(array.reduce((a, b) => a+b, 0) % 2 === 0 ? 'even' :'odd'); 


   
}
oddOrEven([0, 1, 4]);
oddOrEven([0, -1, -5]);
oddOrEven([]);