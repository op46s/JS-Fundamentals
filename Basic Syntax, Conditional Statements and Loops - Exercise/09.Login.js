function login(array) {

    let user = array[0];
    let password = user.split("").reverse().join("");
    let counter = 0;
    for (let i = 1; i <= array.length; i++) {

        let currentWord = array[i];

        if (currentWord != password) {
            counter++;
            if (counter == 4) {
                console.log(`User ${user} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');

        } else {
            console.log(`User ${user} logged in.`);
            return;
        }
    }
}
//login(['Acer', 'login', 'go', 'let me in', 'recA']);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);