// Target format: Fri Jul 29 18:24:01 UTC 2022
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date()
const weekday = weekdays[date.getUTCDay()].substring(0, 3);
const month = months[date.getUTCMonth()].substring(0, 3);
const day = date.getUTCDate().toString().padStart(2, "0");
const hour = date.getUTCHours().toString().padStart(2, "0");
const minute = date.getUTCMinutes().toString().padStart(2, "0");
const second = date.getUTCSeconds().toString().padStart(2, "0");

const dateString = `${weekday} ${month} ${day} ${hour}:${minute}:${second} UTC ${date.getFullYear()}`;
