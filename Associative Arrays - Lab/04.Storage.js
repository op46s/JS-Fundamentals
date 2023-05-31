function storage(input) {

    let storage = new Map();

    for (let lines of input) {
        let [item, quantity] = lines.split(' ');

        if (storage.has(item)) {
            let oldQuantity = Number(storage.get(item));
            quantity = Number(quantity) + oldQuantity;
        }
        storage.set(item, quantity)
    }
    for (const keyAndValue of storage) {
        console.log(`${keyAndValue[0]} -> ${keyAndValue[1]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
// storage(['apple 50',
//     'apple 61',
//     'coffee 115',
//     'coffee 40']);