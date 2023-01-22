const btnE = document.querySelector(".btn");
const closeE = document.querySelector(".close-icon");
const trailerE = document.querySelector(".trailer-container");
const videoE = document.querySelector("video");


btnE.addEventListener("click", ()=> {
    trailerE.classList.remove("active");
});

closeE.addEventListener("click", ()=>{
    trailerE.classList.add("active");
    videoE.pause();
    videoE.currentTime = 0;
})