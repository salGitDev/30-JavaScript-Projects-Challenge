const searchBarContainerEl = document.querySelector(".searh-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener('click', ()=>{
    searchBarContainerEl.classList.toggle("active");
})