function signCheck(a, b, c) {

    let result = ''
    let myCheck = (a, b, c) => a*b*c < 0 ? result = 'Negative' : result = 'Positive';
    console.log(myCheck(a,b,c));
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);