(function(){
    const btnEl = document.getElementById("calculate");
function calculateTotal(billInput, tipInput, totalAmt){
    billInput          = document.getElementById("bill");
    tipInput           = document.getElementById("tip");
    totalAmt           = document.getElementById("total");
    const billVal      = +billInput.value;
    const tipVal       = +tipInput.value;
    const totalVal     = `NLe${(billVal * (1 + tipVal / 100)).toFixed(1)} Or  $${(billVal * (1 + tipVal / 100) / 22.4).toFixed(1)} `;
    totalAmt.innerText = totalVal;
   // console.log(typeof(totalVal))
}
btnEl.addEventListener("click", calculateTotal);
})();