function blackFlag(array) {

    let totalGathered = 0;

    let [days, dailyPlunder, expectation] = array.map(Number);

    for (let i = 1; i <= days; i++) {
        totalGathered += dailyPlunder
        if (i % 3 === 0) {
            totalGathered += dailyPlunder / 2;
        }
        if (i % 5 === 0) {
            totalGathered *= 0.7
        }
    }
    let percentGathered = totalGathered / Number(expectation) * 100
    totalGathered >= expectation ? console.log(`Ahoy! ${totalGathered.toFixed(2)} plunder gained.`) : console.log(`Collected only ${percentGathered.toFixed(2)}% of the plunder.`)
}
blackFlag(["5", "40", "100"])
//blackFlag(["10", "20","380"])