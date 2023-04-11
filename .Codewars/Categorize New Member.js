function openOrSenior(data) {

    let membership = [];

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let personsAge = data[i][0];
            let handiCap = data[i][1];
            if (personsAge >= 55 && handiCap > 7) {
                membership.push('Senior'); break;
            } else {
                membership.push('Open'); break;
            }
        }
    }
    console.log(membership);
}
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);