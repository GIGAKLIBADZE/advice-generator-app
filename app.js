const change = document.getElementById("dice-container");
const adviceIndex = document.getElementById("index");
const quote = document.getElementById("quote");

async function information() {
    const info = await fetch("https://api.adviceslip.com/advice");
    const advice = await info.json();
    
    adviceIndex.innerHTML = `ADVICE #${advice.slip.id}`;
    quote.innerHTML = `${advice.slip.advice}`
}

information();

change.addEventListener("click", (event) => {
    information();
});