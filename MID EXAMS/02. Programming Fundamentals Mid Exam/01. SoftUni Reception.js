function softUniReception(arr){

    let totalStudents = Number(arr.pop());
    let employees = arr.reduce((a, b) => Number(a) + Number(b));
    let hours = 0;

    while (totalStudents > 0) {
        totalStudents -= employees;
        hours++;
        if (hours % 4 == 0) {
            hours++
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);