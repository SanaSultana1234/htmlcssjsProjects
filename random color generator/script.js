const containerE = document.querySelector(".container");

for (let index = 0; index < 48; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerE.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
    colorContainers.forEach((colorContainerE)=> {
        const newColorCode = randomColor();
        colorContainerE.style.backgroundColor = "#" + newColorCode;
        colorContainerE.innerHTML = `#${newColorCode}`;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength =6;
    let colorCode = "";
    for(let i=0; i<colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum, randomNum+1);
    }
    return colorCode;
}