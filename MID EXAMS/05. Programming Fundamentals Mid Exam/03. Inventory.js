function inventory(arr) {

    let myList = arr.shift().split(', ');
    let craftChecker = arr.shift();
    while (craftChecker != 'Craft!') {

        let currentElements = craftChecker.replace(' -', '').split(' ');
        console.log('CUR ELEM', currentElements);

        // COLLECT logic
        if (currentElements[0] == 'Collect') {
            if (!myList.includes(currentElements[1])) {
                myList.push(currentElements[1]);
                craftChecker = arr.shift();
                continue;
            }
        }

        // DROP logic
        if (currentElements[0] == 'Drop') {
            if (myList.toString().includes(currentElements[1])) {
                myList.splice(myList.indexOf(currentElements[1]), 1)
                craftChecker = arr.shift();
                continue;
            }
        }

        // RENEW Logic
        if (currentElements[0] == 'Renew') {
            if (myList.toString().includes(currentElements[1])) {
                myList.splice(myList.indexOf(currentElements[1]), 1)
                myList.push(currentElements[1])
                craftChecker = arr.shift();
                continue;
            }
        }

        // COMBINE Logic
        if (currentElements[0] == 'Combine') {
            currentElements = craftChecker.replace(' - ', ':').split(':')
            console.log('EWQEWEWQE',currentElements);
            if (myList.toString().includes(currentElements[1])) {
                myList.splice(myList.indexOf(currentElements[1]), 1, currentElements[1], currentElements[2]);

            }
        }

        craftChecker = arr.shift();
    }
    console.log(myList.join(', '));
}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);