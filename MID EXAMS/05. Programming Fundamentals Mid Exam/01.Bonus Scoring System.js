function bonusPoints(arr) {

    let newArr = [];
    let checkMostAttendances = arr.slice(3);
    let mostAttendances = (arr) => (Math.max(...arr));

    if (arr[1] == '0') {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    } else {
        for (let i=3; i<arr.length; i++) {
            newArr.push(Number(arr[i]) / Number(arr[1]) * (5 + Number(arr[2])));
        }
        let maxBonus = Math.max(...newArr);
        console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
        console.log(`The student has attended ${mostAttendances(checkMostAttendances)} lectures.`);
    }
}
//bonusPoints(['5',  '25', '30', '12', '19', '24', '16', '20']);
bonusPoints(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);