 generateCols();
    function generateCols(){
        const containerEl = document.querySelector(".container");
        for (let index = 0; index < 30; index++){
            const colorContainerEl = document.createElement("div");
            colorContainerEl.classList.add("color-container");
            containerEl.appendChild(colorContainerEl);
        }
        const colorContainerEls = document.querySelectorAll(".color-container");
        generateColors();
        function generateColors(){
            colorContainerEls.forEach((colorContainerEl)=>{
                const newColorCode = randomColor();
                let colorTag = `#`;
                const colorDisplay = colorContainerEl.style.backgroundColor = colorTag.concat(newColorCode);
                colorContainerEl.innerHTML = colorDisplay;
            })
        }
        function randomColor(){
            const chars = `0123456789abcdef`;
            const colorCodeLength = 6; 
            let colorCode = ``;
            for (index = 0; index < colorCodeLength; index++){
                const randomNum = Math.floor(Math.random() * chars.length);
                colorCode += chars.substring(randomNum, randomNum + 1);
            }
            return colorCode;
        }
        
    }
    setInterval(() => {
        generateCols();
  }, 4000);