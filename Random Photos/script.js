const containerE = document.querySelector(".image-container");
const btnE = document.querySelector(".btn");

btnE.addEventListener("click", ()=> {
    addNewImages(10);
});

function addNewImages(imageNum) {
    for(let i=0; i<imageNum; i++) {
        const imageE = document.createElement("img");
        imageE.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        containerE.appendChild(imageE);
    }
}