function bombNumbers(myArr, special) {

    let bombNumber = special[0];
    let power = special[1];
    let bNum = myArr.indexOf(bombNumber);
    let detonatorCount = 0;

    // console.log('Bomb Number -', bombNumber);
    // console.log('Power -', power);
    // console.log('Bomb Number Index -', bNum)

    for (const el of myArr) {
        if (el == bombNumber) {
            detonatorCount++;
        }
    }

    if (detonatorCount == 1) {
        myArr.splice(bNum-power, bNum+power);
        console.log(myArr.reduce((a, b) => a+b));
    } else {
        while (myArr.indexOf(bombNumber) != -1) {
           
            myArr.splice(bNum-power, bNum+power);
            
        }
        console.log(myArr.reduce((a, b) => a+b))
    }
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);