(function(){
const btnEl      = document.querySelector("button");
const birthdayEl = document.querySelector("#birthday");
const resultEl   = document.querySelector("#result");
function calculateAge(){
    const birthdayVal = birthdayEl.value;
    if  (birthdayVal === ""){
        alert(`Please enter a valid birth date`)
    }else {
        let age = getAge(birthdayVal);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} old`;
    }
}
function getAge(birthdayVal){
    const currentDate = new Date();
   const birthdayDate = new Date(birthdayVal);
   const age = currentDate.getFullYear() - birthdayDate.getFullYear();
   const month = currentDate.getMonth() - birthdayDate.getMonth();
   if (month < 0 || (month === 0 && currentDate.getDay > birthdayDate.getDate())){
    age--;
   }
   return age;
}
btnEl.addEventListener("click", calculateAge);
})();