(function(containerEl, leftEl, rightEl){
        containerEl = document.querySelector(".container");
        leftEl = document.querySelector(".left");
        rightEl = document.querySelector(".right");
        /* Left El */
    leftEl.addEventListener("mouseenter", ()=>{
        containerEl.classList.add("active-left");
    })
    leftEl.addEventListener("mouseleave", ()=>{
        containerEl.classList.remove("active-left"); 
    })
    /* Left El */
    /* Right El */
    rightEl.addEventListener("mouseenter", ()=>{
        containerEl.classList.add("active-right");
    })
    rightEl.addEventListener("mouseleave", ()=>{
        containerEl.classList.remove("active-right"); 
    })
    /* Right El */  
    }
)();