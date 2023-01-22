const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionE = document.getElementById("question");
const scoreE =document.getElementById("score");
const inputE = document.getElementById("input");
const formE = document.getElementById("form");

let score=JSON.parse(localStorage.getItem("score"));
if(!score) {
    score=0;
}

scoreE.innerText=`score: ${score}`;
questionE.innerText=`What is ${num1} multiply by ${num2}?`;
const ans = num1*num2;

formE.addEventListener("submit", ()=> {
    const userAns = +inputE.value;
    
    if(userAns===ans) {
        score++;
    } else {
        score--;
    }
    updateLocalStorage();
    
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}