const bgImgE = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImg();
});

function updateImg() {
    bgImgE.style.opacity = 1 - window.pageYOffset/900;
    bgImgE.style.backgroundSize = 160 - window.pageYOffset/12 + "%";
}