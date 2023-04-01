function computerStore(inputPrices) {

    let totalPrice = 0;
    let totalPriceWithTaxes = 0;
    let taxes = 0;
    let myArray = inputPrices;

    for (let i=0; i<myArray.length-1; i++) {

        let currentElement = Number(myArray[i]);
        if (currentElement <=0) {
            console.log('Invalid price!');
            continue;
        }
        
        totalPrice += currentElement;
    }

    if (totalPrice <= 0) {
        console.log('Invalid order!');
        return;
    }

    totalPriceWithTaxes = totalPrice*1.2;
    taxes = totalPrice*0.2;
    myArray.includes('special') ? totalPriceWithTaxes*=0.9 : totalPriceWithTaxes*=1;
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`); 
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);

}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
//computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
//computerStore(['regular']);