function grades(input) {

    let studentGrades = {};

    for (const line of input) {
        let eachStudentData = line.split(' ');
        let student = eachStudentData.shift();
        let grade = eachStudentData.map(Number);

        if (studentGrades.hasOwnProperty(student)) {
            studentGrades[student] = studentGrades[student].concat(grade)
        } else {
            studentGrades[student] = grade;
        }
    }

    for (const name in studentGrades) {
        let sum = studentGrades[name].reduce((a, b) => a + b);
        studentGrades[name] = (sum / studentGrades[name].length).toFixed(2);
    }

    let studentGradesToArr = Object.entries(studentGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grade] of studentGradesToArr) {
        console.log(`${name}: ${grade}`);
    }
}
grades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
grades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);