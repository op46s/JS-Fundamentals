function loadingBar(n) {

    if (n == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${n}% `+'['+'%'.toString().repeat(n/10) + '.'.toString().repeat(10-n/10)+']');
        console.log('Still loading...');
    }
}
loadingBar(30);
//loadingBar(50);
//loadingBar(100);