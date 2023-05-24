function sortByTwo(arr) {

    let sortedByLength = arr.sort((a, b) => {

        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    for (let el of sortedByLength) {
        console.log(el);
    }
}
// sortByTwo(['alpha',
//     'beta',
//     'gamma'
// ]);
// sortByTwo(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George'
// ]);
sortByTwo(['test',
    'Deny',
    'omen',
    'Default'
]);