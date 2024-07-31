(function(){
videoTrailer(); //hoisted
function videoTrailer(btnEl, videoEl, closeIconEl, trailerContainerEl){
                 btnEl = document.querySelector(".btn");
               videoEl = document.querySelector("video");
           closeIconEl = document.querySelector(".close-icon");
    trailerContainerEl = document.querySelector(".trailer-container");
    btnEl.addEventListener("click", () => {
        trailerContainerEl.classList.remove("active");
    })
    closeIconEl.addEventListener("click", () => {
        trailerContainerEl.classList.add("active");
        videoEl.pause();
        videoEl.currentTime = 0;
    })
}
})();
