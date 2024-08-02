(function(){
function updateClock(hourEl, minuteEl, secondEl){
    hourEl = document.querySelector(".hour");
    minuteEl = document.querySelector(".minute");
    secondEl = document.querySelector(".second");
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minute = currentDate.getMinutes();
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const second = currentDate.getSeconds();
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
})();