function shoppingList(input) {

    let initialList = input.shift().split('!');
    let commands = input.shift();

    while (commands != 'Go Shopping!') {
        let curCom = commands.split(' ');

        switch (curCom[0]) {
            case 'Urgent':
                if (!initialList.includes(curCom[1])) {
                    initialList.unshift(curCom[1]);
                }
            break;
            case 'Unnecessary':
                if (initialList.includes(curCom[1])) {
                    initialList.splice(initialList.indexOf(curCom[1]), 1);
                }
            break;
            case 'Correct':
                if (initialList.includes(curCom[1])) {
                    initialList.splice(initialList.indexOf(curCom[1]), 1, curCom[2])
                }
            break;
            case 'Rearrange':
                if (initialList.includes(curCom[1])) {
                    initialList.splice(initialList.indexOf(curCom[1]), 1);
                    initialList.push(curCom[1]);
                }
            break;
        }
        commands = input.shift();
    }
    console.log(initialList.join(', '));
}
// shoppingList(["Tomatoes!Potatoes!Bread",
//                 "Unnecessary Milk",
//                 "Urgent Tomatoes",
//                 "Go Shopping!"
// ]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
                "Urgent Salt",
                "Unnecessary Grapes",
                "Correct Pepper Onion",
                "Rearrange Grapes",
                "Correct Tomatoes Potatoes",
                "Go Shopping!"
])