const kits = ["crash", "kick", "snare", "tom1"];

const containerE = document.querySelector(".container");

kits.forEach((kit)=> {
    const btnE = document.createElement("button");
    btnE.classList.add("btn");
    btnE.innerText = kit;
    btnE.style.backgroundImage = "url(images/"+ kit+".png)";
    containerE.appendChild(btnE);
    const audioE = document.createElement("audio");
    audioE.src = "sounds/" + kit+".mp3";
    containerE.appendChild(audioE);

    btnE.addEventListener("click", ()=> {
        audioE.play();
    })
    window.addEventListener("keydown", (event)=>{
        if(event.key===kit.slice(0, 1)) {
            audioE.play();
            btnE.style.transform = "scale(0.9)"
            setTimeout(()=> {
                btnE.style.transform = "scale(1)"
            }, 100)
        }
    })
})