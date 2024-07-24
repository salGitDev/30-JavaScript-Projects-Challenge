function updateClock(hourEl, minuteEl, secondEl, ampmEl){
    hourEl = document.getElementById("hours");
    minuteEl = document.getElementById("minutes");
    secondEl = document.getElementById("seconds");
    ampmEl = document.getElementById("ampm");
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = `AM`;
if (h >= 12){
    ampm = `PM`;
}

let smh = `0`;
if(h < 10){
    h = smh.concat(h);
} else if (m < 10){
    m = smh.concat(m)
} else if (s < 10){
    s = smh.concat(s);
}
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1000)
}
updateClock();

