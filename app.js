const now = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
let month = months[now.getMonth()];
let m = months[now.getMonth()] + "\n" + now.getFullYear();
console.log();
document.getElementById("weekday").innerText = days[now.getDay()].toUpperCase();
document.getElementById("monthyear").innerText = m;
document.getElementById("day").innerText = now.getDate();