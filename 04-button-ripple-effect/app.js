

(function(btnEl){
    btnEl = document.querySelector(".btn");
    btnEl.addEventListener("mouseover", (event)=>{
        const x = event.pageX - btnEl.offsetTop;
        const y = event.pageY - btnEl.offsetTop;
        btnEl.style.setProperty("--xPos", x + "px");
        btnEl.style.setProperty("--yPos", y + "px");
    
    });
})();