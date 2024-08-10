
(function(){
    const computerChoiceEl = document.getElementById("computer-choice");
const userChoiceEl = document.getElementById("user-choice");
const resultDisplaytEl = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".btn");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceEl.innerHTML = userChoice;
   //console.log(userChoiceEl);
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice(){
    const randomNum = Math.floor(Math.random() * possibleChoices.length);
   // console.log(randomNum);
    if (randomNum === 0){
        computerChoice = "rock";
    }
    if (randomNum === 1){
        computerChoice = "scissors";
    }
    if (randomNum === 2){
        computerChoice = "paper";
    }
    computerChoiceEl.innerHTML = computerChoice;

}

function getResult(){
    if(computerChoice === userChoice){
        result = "It's a draw!";
        resultDisplaytEl.style.color = "orange";
    }
    if(computerChoice === "rock" && userChoice === "papaer"){
        result = "You win!";
        resultDisplaytEl.style.color = "darkolivegreen";
        
    }

    if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You loose!";
        resultDisplaytEl.style.color = "red";
        
    }

    if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You win!";
        resultDisplaytEl.style.color = "darkolivegreen";
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "You loose!";
        resultDisplaytEl.style.color = "red";
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win!";
        resultDisplaytEl.style.color = "darkolivegreen";
    }
    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "you loose!";
        resultDisplaytEl.style.color = "red";
    }
    resultDisplaytEl.innerHTML = result; 
}

})();