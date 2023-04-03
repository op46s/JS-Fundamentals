function guineaPig(arr) {

    let foodGrams = Number(arr[0]) * 1000;
    let hayGrams = Number(arr[1]) * 1000;
    let coverGrams = Number(arr[2]) * 1000;
    let pigWeightGrams = Number(arr[3]) * 1000; 
    for (let i=1; i<=30; i++) {
        foodGrams-=300;
        i % 2 === 0 ? hayGrams-=foodGrams*0.05 : null;    
        i % 3 === 0 ? coverGrams-=pigWeightGrams/3 : null;    
    }
    if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
        console.log('Merry must go to the pet store!');
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams/1000).toFixed(2)}, Hay: ${(hayGrams/1000).toFixed(2)}, Cover: ${(coverGrams/1000).toFixed(2)}.`)
    }
}
guineaPig(["10",  "5",  "5.2",  "1"]);
guineaPig(["1",  "1.5",  "3",  "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);