function softUni(inputArr) {

    let allTotalPerHour = Number(inputArr[0]) + Number(inputArr[1]) + Number(inputArr[2]);

    //let sum = (([a, b, c]) => Number(a) + Number(b) + Number(c))(inputArr.slice(0, 3));
    //console.log(sum)

    let totalHours = 0
    let studentsCount = inputArr[3];
    while (studentsCount > 0) {
    
        studentsCount-=allTotalPerHour;
        totalHours++
        if(totalHours % 4 ===0) {
            totalHours++
        }
    }
    console.log(`Time needed: ${totalHours}h.`);
}
softUni(['5','6','4','20']);
//softUni(['1','2','3','45']);
//softUni(['3','2','5','40']);