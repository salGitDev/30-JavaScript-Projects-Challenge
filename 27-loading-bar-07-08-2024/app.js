const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
let index = 0;
updateNum();
function updateNum(){
counterEl.innerHTML = `${index}%`;
barEl.style.width = `${(index)}%`;
index++;

if(index < 101){
    setTimeout(updateNum, 20);
}
}