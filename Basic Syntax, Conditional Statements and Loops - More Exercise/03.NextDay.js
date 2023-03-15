function nextDay(year, month, day) {

    switch(month) {
        case 4 : case 6 : case 9 : case 11 : 
            if (day == 30) {
                month++;
                day = 1;
            } break;
        case 2 : 
            if (((year % 4 === 0 && year % 100 !=0) || (year % 400 === 0)) && day == 28) {
                day = 29;
            } else {
                day = 1;
                month++;
            } break;
        default: day++; 
    }
    if (year < 1900) {
        year = 1900 + year;
    }
    console.log(`${year}-${month}-${day}`);
}
//nextDay(2016, 2, 29);
nextDay(2020, 3, 24);


function nextDay(year, month, day) {

    let today = new Date(year, month-1, day+1);
    let myYear = today.getFullYear();
    let myMonth = today.getMonth()+1;
    let myDay = today.getDate();

    console.log(`${myYear}-${myMonth}-${myDay}`); 

}
//nextDay(2016, 9, 30);
nextDay(2020, 3, 24);

