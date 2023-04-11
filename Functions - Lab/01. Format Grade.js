function formatGrade(grade) {

    let finalGrade = '';

    if (grade < 3) {
        console.log('Fail (2)');
        return;
    } else {
        if (grade >= 5.50) {
            finalGrade = 'Excellent'
        } else if (grade >= 4.50) {
            finalGrade = 'Very good'
        } else if (grade >= 3.50) {
            finalGrade = 'Good'
        } else if (grade >= 3.00) {
            finalGrade = 'Poor'
        }
    }
    console.log(`${finalGrade} (${grade.toFixed(2)})`);
}
formatGrade(3.49);