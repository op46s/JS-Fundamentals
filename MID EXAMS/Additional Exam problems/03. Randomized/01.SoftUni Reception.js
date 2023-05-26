function softUniReception(arr) {

    let data = arr.map(Number)
    let studentsCount = data.pop();
    let timeNeeded = 0;
    let allTotalHOurs = 0;

    for (let i = 0; i < data.length; i++) {
        allTotalHOurs += data[i];
    }

    while (studentsCount > 0) {
        timeNeeded++;
        if (timeNeeded % 4 === 0) {
            timeNeeded++
        }
        studentsCount -= allTotalHOurs

    }
    console.log(`Time needed: ${timeNeeded}h.`);
}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);


//0 1 2 3 4 5 6