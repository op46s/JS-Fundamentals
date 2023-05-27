function inventory(input) {

    let journal = input.shift().split(', ');

    while (input != 'Craft!') {

        let [command, item] = input
            .shift()
            .split(' - ');

        if (command === 'Collect') {
            if (journal.indexOf(item) == -1) {
                journal.push(item);
            }
        }

        if (command === 'Drop') {
            if (journal.indexOf(item) !== -1) {
                journal.splice(journal.indexOf(item), 1);
            }
        }

        if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (journal.includes(oldItem)) {
                journal.splice(journal.indexOf(oldItem), 1, oldItem, newItem)
            }
        }

        if (command === 'Renew') {
            if (journal.includes(item)) {
                journal.splice(journal.indexOf(item), 1);
                journal.push(item);
            }
        }
    }
    console.log(journal.join(', '));
}
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
