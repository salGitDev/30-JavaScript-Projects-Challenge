const btnEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList = [];
function rollDice(){
    const rollResult = Math.floor(Math.random() * 6) + 1;
   // console.log(rollResult);
   const diceFace = getDiceFace(rollResult);
  // console.log(diceFace);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}
function updateRollHistory(){
    rollHistoryEl.innerHTML = "";
    for (i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        Roll ${i + 1}: <span>${historyList[i]}</span>
        `;
        rollHistoryEl.appendChild(listItem);
    }  
}
function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
            return "&#9856;";
            break;
        case 2:
            return "&#9857;";
            break;
        case 3:
            return "&#9858;";
            break;
        case 4:
            return "&#9859;";
            break;
        case 5:
            return "&#9860;";
            break;
        case 6:
            return "&#9861;";
            break;
            default:
                "";
    }
}
btnEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000)
})