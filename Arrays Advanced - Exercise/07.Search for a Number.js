function searchForANumber(arr, settings) {

    let cut = settings.shift();
    let deleteCount = settings.shift();
    let searched = settings.shift(); 
    let searchedNumCount = 0;

    let sliced = arr.slice(0, cut);
    sliced.splice(0, deleteCount);

    for (const el of sliced) {
        if (el == searched) {
            searchedNumCount++;
        }
    }
    console.log(`Number ${searched} occurs ${searchedNumCount} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);