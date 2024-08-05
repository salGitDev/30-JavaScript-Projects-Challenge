(function(){
    const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");
 const emoji = [];
    async function getEmoji(){
        const response = await fetch("https://emoji-api.com/emojis?access_key=6770de1a5fef26c18abbb10f3c88b7f4986d9c8d")
        let data = await response.json();
        for (let i = 0; i < 1500; i++){
            emoji.push({
                emojiName: data[i].character,
                emojiCode: data[i].unicodeName
            });
        }
    }

    getEmoji();
    //console.log(emoji);
btnEl.addEventListener("click", () => {
   const randomNum = Math.floor(Math.random() * emoji.length);
   btnEl.innerText = emoji[randomNum].emojiName;
   //emojiNameEl.innerText = emoji[randomNum].emojiCode;
   let newArr = Object.values(emoji[randomNum].emojiCode);
   newArr = newArr.join("");
   newArr = newArr.substring(5, newArr.length);
   emojiNameEl.innerText = newArr;
   //console.log(emoji[randomNum].emojiCode)
  //console.log(newArr)
});

})();