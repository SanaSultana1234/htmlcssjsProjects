const navbarE = document.querySelector(".navbar");
const bottomE = document.querySelector(".bottom-container");
window.addEventListener("scroll", ()=> {
    if(window.scrollY > bottomE.offsetTop - navbarE.offsetHeight - 50) {
        navbarE.classList.add("active");
    } else {
        navbarE.classList.remove("active");
    }
});
