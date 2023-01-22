const nextE = document.querySelector(".next");
const prevE = document.querySelector(".prev");
const imageContainerE = document.querySelector(".image-container");
const imgsE = document.querySelectorAll("img");

const limit = imgsE.length;
let currImg=1;
let timeOut;

nextE.addEventListener("click", ()=>{
    currImg++;
    clearTimeout(timeOut);
    updateImg();
});

prevE.addEventListener("click", ()=>{
    currImg--;
    clearTimeout(timeOut);
    updateImg();
});

updateImg();

function updateImg() {
    if(currImg>limit)
        currImg=1;
    if(currImg<1)
        currImg=limit;
    imageContainerE.style.transform = `translateX(-${(currImg-1)*500}px)`;
    timeOut=setTimeout(()=>{
        currImg++;
        updateImg();
    }, 3000);
}