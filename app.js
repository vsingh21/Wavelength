// DOM Elements
const ticksContainer = document.getElementById("ticks");
const generateButton = document.getElementById("generateButton");
const revealButton = document.getElementById("revealButton");
const message = document.getElementById("message");

let hiddenNumber = null;
let isRevealed = false;

// Generate semicircle board ticks (0 - 100 labeled every 10)
function createBoard() {
    const totalTicks = 100;
    const step = 10;

    for (let i = 0; i <= totalTicks; i += step) {
        const angle = (i / totalTicks) * 180; // Map to semicircle
        const tick = document.createElement("div");
        tick.classList.add("tick");
        tick.style.transform = `rotate(${angle}deg)`;

        // Add labels every 10 ticks
        if (i % 10 === 0) {
            const label = document.createElement("div");
            label.classList.add("label");
            label.style.transform = `rotate(${-angle}deg)`;
            label.textContent = i;
            tick.appendChild(label);
        }

        ticksContainer.appendChild(tick);
    }
}

// Generate random number and hide it
generateButton.addEventListener("click", () => {
    hiddenNumber = Math.floor(Math.random() * 101);
    message.textContent = "Number generated! Guess its range.";
    revealButton.disabled = false;
    isRevealed = false;
});

// Reveal the hidden number
revealButton.addEventListener("click", () => {
    if (hiddenNumber !== null && !isRevealed) {
        message.textContent = `The hidden number is ${hiddenNumber}!`;
        const range = Math.floor(hiddenNumber / 10) * 10;
        const rangeEnd = range + 10;
        message.textContent += ` It falls in the range [${range} - ${rangeEnd}).`;
        isRevealed = true;
    }
});

createBoard();