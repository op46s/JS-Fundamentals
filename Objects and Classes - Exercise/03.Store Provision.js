function storeProvisions(stock, orders) {

  let newStock = {};

  for (let i = 0; i < stock.length; i += 2) {
    product = stock[i];
    quantity = Number(stock[i + 1]);
    newStock[product] = quantity;
  }

  for (let i = 0; i < orders.length; i += 2) {
    let product2 = orders[i];
    let quantity2 = Number(orders[i + 1]);
    if (!newStock.hasOwnProperty(product2)) {
      newStock[product2] = quantity2;
    } else {
      newStock[product2] += quantity2
    }
  }

  let myObj = Object.keys(newStock);

  for (let key of myObj) {
    console.log(`${key} -> ${newStock[key]}`)
  }

}
storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
// storeProvisions(
//   ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
//   ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]);
