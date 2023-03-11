function holiday(people, groupType, day) {

    let totalPrice = 0;
    let price = 0;
    let discount = 1;

    switch (groupType) {

        case "Students":
            if (day === "Friday") {
                price = 8.45;
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46;
            }

            if (people >= 30) {
                discount = 0.85;
            }

            break;
        case "Business":

            if (people >= 100) {
                people -=10;
            }


            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }
            break;
        case "Regular":

            if (people >= 10 && people <= 20) {
                discount = 0.95;
            }


            if (day === "Friday") {
                price = 15;
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50;
            }
            break;

    }
    totalPrice = (people * price * discount);
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
//holiday(30, "Students", "Sunday");
