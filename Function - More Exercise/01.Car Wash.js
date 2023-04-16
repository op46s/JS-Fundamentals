function carWash(arr) {

    let result = 0;

    for (let i=0; i<arr.length; i++) {

        if (arr[i] == 'soap') {
            result+=10;
        }

        if (arr[i] == 'vacuum cleaner') {
            result*=1.25;
        }

        if (arr[i] == 'water') {
            result*=1.2;
        }

        if (arr[i] == 'mud') {
            result*=0.9;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
  