function tripleLatinLetters(num) {

    for (let loop1 = 0; loop1 < num; loop1++) {
        let letter1 = String.fromCharCode(97 + loop1);
        for (let loop2 = 0; loop2 < num; loop2++) {
            let letter2 = String.fromCharCode(97 + loop2);

            for (let loop3 = 0; loop3 < num; loop3++) {
                let letter3 = String.fromCharCode(97 + loop3);
                console.log(letter1 + letter2 + letter3);
            }
        }
    }
}
tripleLatinLetters(2);