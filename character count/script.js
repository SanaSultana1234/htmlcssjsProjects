const textA = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remCounter = document.getElementById("rem-counter");


textA.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter();

function updateCounter() {
    totalCounter.innerText = textA.value.length;
    remCounter.innerText = textA.getAttribute("maxLength")-textA.value.length;
}