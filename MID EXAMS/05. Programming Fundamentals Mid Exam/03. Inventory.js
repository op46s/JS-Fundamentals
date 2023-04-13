function inventory(arr) {

    let myList =  arr.shift().split(', ');
    let craftChecker = arr.shift();
    while(craftChecker != 'Craft!') {

        let currentElements = craftChecker.replace(' -', '').split(' ');
        
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

        craftChecker = arr.shift();
        
    }
    console.log(myList.join(', ')); 
}
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
//inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!']);