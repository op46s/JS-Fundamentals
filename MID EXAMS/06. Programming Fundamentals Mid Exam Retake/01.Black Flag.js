function blackFlag(arr) {

    let days = Number(arr[0]);  
    let dailyPlunder = Number(arr[1]); 
    let expectedPlunder = Number(arr[2]); 
    let totalPlunderGathered = 0;

    for (let i=1; i<=days; i++) {
        totalPlunderGathered+=dailyPlunder;
        
        if (i % 3 === 0) {
            totalPlunderGathered+=dailyPlunder/2;
        }  
        if (i % 5 === 0) {
            totalPlunderGathered*=0.7;
        }
    }
    if (totalPlunderGathered >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunderGathered.toFixed(2)} plunder gained.`)
    } else {
        let percentage = (totalPlunderGathered / expectedPlunder) * 100
        
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}
// blackFlag(["5",
//             "40",
//             "100"
// ]);
blackFlag(["10",
            "20",
            "380"
])