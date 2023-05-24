function bonusScoringSystem(input) {

    let maxBonusArray = [];

    let data = input.map(Number)
    let students = data.shift();
    let lectures = data.shift();
    if (lectures == 0) {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
        return;
    }
    let additionalBonus = data.shift();

    for (let i = 0; i < data.length; i++) {
        currentBonus = data[i] / lectures * (5 + additionalBonus);
        maxBonusArray.push(Math.round(currentBonus))
    }

    let indexOfMax = maxBonusArray.indexOf(Math.max(...maxBonusArray));

    console.log(`Max Bonus: ${Math.max(...maxBonusArray)}.`);
    console.log(`The student has attended ${data[indexOfMax]} lectures.`);
}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
// bonusScoringSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18'
// ])