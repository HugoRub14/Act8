function createCalendar() {
    let choice = document.getElementById("months").value;
    let days;

    switch(choice) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            days = 31;
            break;
        case "April":
        case "June":
        case "September":
        case "November":
            days = 30;
            break;
        default:
            days = 28;
    }

    document.getElementById("calendar").innerHTML = "This month has " + days + " days.";
}
