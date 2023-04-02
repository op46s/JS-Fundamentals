function steam(arr) {

    let gamesArr = arr[0].toString().split(' ');
    let todo = arr.slice(1, arr.length - 1).toString().replaceAll(' ', ',').split(',');

    for (let i = 0; i < todo.length; i++) {

        let current = todo[i];
        let next = todo[i + 1];

        if (current === 'Install') {
            if (!gamesArr.includes(next))
                gamesArr.push(next);
        }
        if (current === 'Uninstall') {
            if (gamesArr.includes(next)) {
                gamesArr = gamesArr.filter(element => element !== next);
            }
        }
        if (current === 'Update') {
            if (gamesArr.includes(next)) {
                gamesArr = gamesArr.filter(element => element !== next);
                gamesArr.push(next);
            }
        }
        if (current === 'Expansion') {
            let removeExpansionDetails = next.indexOf('-');
            let newThing = next.slice(0, removeExpansionDetails)
            if (gamesArr.includes(newThing)) {
                gamesArr = gamesArr.filter(element => element !== next);
                let index = gamesArr.indexOf(newThing)
                gamesArr.splice(index + 1, 0, next);
            }
        }
    }
    console.log(gamesArr);
}
steam(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
steam(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
