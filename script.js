const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");

var dateTime;
var hour, min, sec;
var mon, day, year;

function displayDateAndTime() {
    dateTime = new Date();

    hour = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours();
    min = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
    sec = dateTime.getSeconds() < 10 ? "0" + dateTime.getSeconds() : dateTime.getSeconds();

    mon = dateTime.getMonth();
    day = dateTime.getDay();
    year = dateTime.getFullYear();

    TIME.innerHTML = hour + ":" + min + ":" + sec;
    DATE.innerHTML = day + "/" + mon + "/" + year;

}

interval = setInterval(displayDateAndTime, 1000);