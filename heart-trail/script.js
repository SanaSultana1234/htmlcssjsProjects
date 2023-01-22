const bodyE = document.querySelector("body");

bodyE.addEventListener("mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanE = document.createElement("span");
    const size = Math.random()*100;

    spanE.style.left = xPos+"px";
    spanE.style.top=yPos+"px";
    spanE.style.width = size+"px";
    spanE.style.height = size+"px";
    
    bodyE.appendChild(spanE);

    setTimeout(()=> {
        spanE.remove();
    }, 3000)
});