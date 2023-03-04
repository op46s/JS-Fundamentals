function rounding(num1, num2) {

    if (num2 > 15) {
        num2 = 15;
    }
    let print = num1.toFixed(num2);
    print = parseFloat(print);

    if (print % 1 === 0 && print.toString().includes('.')) {
        print = print.toFixed(1);
    }

    console.log(print);

}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);