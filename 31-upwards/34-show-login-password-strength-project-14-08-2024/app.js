const inputEl     = document.querySelector("input");
const showHideEl  = document.querySelector(".show_hide");
const indicatorEl = document.querySelector(".indicator");
const iconTextEl  = document.querySelector(".icon-text");
const textEl      = document.querySelector(".text");
showHideEl.addEventListener("click", () => {
    if (inputEl.type === "password"){
        inputEl.type = "text";
        showHideEl.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        inputEl.type = "password";
        showHideEl.classList.replace("fa-eye", "fa-eye-slash");
    }
})
let alphabet = /[a-zA-Z]/;
let numbers  = /[0-9]/;
let searchChars = /[!, @, #, $, %, ^, &, *, ?, _, (,), -, =, ~]/
inputEl.addEventListener("keyup", () => {
    indicatorEl.classList.add("active");
    let val = inputEl.value;
if (val.match(alphabet) || val.match(numbers) || val.match(searchChars)){
    textEl.textContent = "Password is weak";
    inputEl.style.borderColor = "red";
    showHideEl.style.color = "red";
    iconTextEl.style.color = "red";
}
    if (val.match(alphabet) && val.match(numbers) && val.length >= 6){
        textEl.textContent = "Password is medium";
        inputEl.style.borderColor = "orange";
        showHideEl.style.color = "orange";
        iconTextEl.style.color = "orange";
        
    }
    if (val.match(alphabet) && val.match(numbers) && val.match(searchChars) && val.length >= 8){
        textEl.textContent = "Password is strong and okay";
        inputEl.style.borderColor = "green";
        showHideEl.style.color = "green";
        iconTextEl.style.color = "green";
        console.log(val);
    }
    if (val == ""){
        indicatorEl.classList.remove("active");
        inputEl.style.borderColor = "grey";
        showHideEl.style.color = "grey";
        iconTextEl.style.color = "grey";
    }
})
