function monthPrinter(month) {

    let currentMonth = "";

    if (month > 12 || month < 1) {
        console.log("Error!");
    } else {
        switch (month) {
            case 1: currentMonth = "January"; break;
            case 2: currentMonth = "February"; break;
            case 3: currentMonth = "March"; break;
            case 4: currentMonth = "April"; break;
            case 5: currentMonth = "May"; break;
            case 6: currentMonth = "June"; break;
            case 7: currentMonth = "July"; break;
            case 8: currentMonth = "August"; break;
            case 9: currentMonth = "September"; break;
            case 10: currentMonth = "October"; break;
            case 11: currentMonth = "November"; break; 
            case 12: currentMonth = "December"; break;
        }
        console.log(currentMonth);
    }
}
monthPrinter(13);