const numEl = document.querySelector(".num");
let minusEl = document.querySelector(".minus");
let plusEl = document.querySelector(".plus");
let currentNum = 1;
plusEl.addEventListener("click", ()=>{
   currentNum++;
   currentNum = (currentNum < 10) ? "0" + currentNum : currentNum;
   //console.log(currentNum)
   numEl.innerHTML = currentNum;
});
minusEl.addEventListener("click", ()=>{
   
   if (currentNum > 1){
    currentNum--;
    currentNum = (currentNum < 10) ? "0" + currentNum : currentNum;
    numEl.innerHTML = currentNum;
   }
});

