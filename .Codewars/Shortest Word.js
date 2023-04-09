function findShort(input) {
    let min = input.split(' ').reduce((acc, cur, index) => {
        if (index === 0) {
            acc[0] = cur.length
            acc[1] = cur.length
            return acc
        }
        
        if (acc[0] > cur.length) {
            acc[0] = cur.length
        }

        if (acc[1] < cur.length) {
            acc[1] = cur.length
        }

        return acc
    }, [0 , 0]);
    
    console.log(min);
}
findShort('need to account for different data types');
// findShort('String will never b4e empty');




    // let minimum = arr[0].length;

    // for (let i=1; i<arr.length; i++) {
    //     if (arr[i].length < minimum) {
    //         minimum = arr[i].length
    //     }
    // }