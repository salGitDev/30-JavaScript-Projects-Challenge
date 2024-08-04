(function(){
const  btnEl = document.getElementById("btn");
function calculateBMI(heightVal, weightVal, bmiresultEl, weightConditionEl){
    heightVal = document.getElementById("height").value / 100;
    weightVal = document.getElementById("weight").value;
    const bmiVal = (weightVal / (heightVal ** 2)).toFixed(2);
    bmiresultEl = document.getElementById("bmi-result");
    bmiresultEl.value = bmiVal;
    weightConditionEl = document.getElementById("weight-condition");
    if(bmiVal < 18.5){
        weightConditionEl.innerText = `Under weight`;
    }else if (bmiVal >= 18.5 && bmiVal <= 24.9){
        weightConditionEl.innerText = `Normal weight`;
    }else if (bmiVal >= 25 && bmiVal <= 29.9){
        weightConditionEl.innerText = `Over weight`;
    } else if (bmiVal >= 30){
        weightConditionEl.innerText = `Obesity`;
    } 
}
btnEl.addEventListener("click", calculateBMI);
})();