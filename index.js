const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")
const emojiCodeEl = document.getElementById("emoji-code")


const emoji = [];

async function getEmoji(){
  let response = await fetch("https://emoji-api.com/emojis?access_key=d66d3d5fb352cf829c787e507772696ea0bf86f5")
  data = await response.json()
  for (let i=0; i<1500; i++) {
    emoji.push ({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
        emojiCode2: data[i].codePoint, 
    })
  }
}

getEmoji()

btnEl.addEventListener("click", ()=> {
    const randomNum = Math.floor(Math.random()* emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
    emojiCodeEl.innerText = emoji[randomNum].emojiCode2;
})
