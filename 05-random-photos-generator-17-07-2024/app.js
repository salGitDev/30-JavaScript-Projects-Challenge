(function(imageContainerEl, btnEl){
    imageContainerEl = document.querySelector(".image-container");
    btnEl = document.querySelector(".btn");
    btnEl.addEventListener("click", ()=>{
    addNewImages();
})
function addNewImages(imageNum){
    imageNum = 8;
    for (let i = 0; i < imageNum; i++){
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);
    }
}
})();