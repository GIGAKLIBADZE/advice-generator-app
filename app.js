const change = document.getElementById("dice-container");
const adviceIndex = document.getElementById("index");
const quote = document.getElementById("quote");

change.addEventListener("click", (event) => {
    async function information() {
        const info = await fetch("https://api.adviceslip.com/advice");
        const advice = await info.json();
        console.log(advice);
        
        adviceIndex.innerHTML = `ADVICE #${advice.slip.id}`;
        quote.innerHTML = `${advice.slip.advice}`
    }

    information();
});