/*
const yearEl = document.querySelector(".year");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const newYearTime = new Date("January 1, 2025 00:00:00").getTime();
updateCountDown();
function updateCountDown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    //console.log(s) console.log(d) console.log(m)  console.log(h); 5: 03:30 5:28:50
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(updateCountDown, 1000);
if (d === 365 || d === 366){
    yearEl.innerText = 2025;
}
}
*/
(function(yearEl, dayEl, hourEl, minuteEl, secondEl, newYearTime){
    yearEl      = document.querySelector(".year");
    dayEl       = document.getElementById("day");
    hourEl      = document.getElementById("hour");
    minuteEl    = document.getElementById("minute");
    secondEl    = document.getElementById("second");
    newYearTime = new Date("January 1, 2025 00:00:00").getTime();
    updateCountDown();
function updateCountDown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    //console.log(s) console.log(d) console.log(m)  console.log(h); 5: 03:30 5:28:50
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(updateCountDown, 1000);
if (d === 365 || d === 366){
    yearEl.innerText = 2025;
}
}
}
)();

const now = new Date().getTime();
console.log(now)

