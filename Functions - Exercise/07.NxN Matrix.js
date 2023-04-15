function nXnMatrix(num) {

    function repeatRow(a) {
        let row = a.toString() + ' ';
        return row.repeat(a)
    }

    function repeatColumn(a) {
        for (let i = 0; i < a; i++) {
            console.log(repeatRow(a));
        }
    }

    return repeatColumn(num);
}
nXnMatrix(3)
nXnMatrix(7)
nXnMatrix(2)


