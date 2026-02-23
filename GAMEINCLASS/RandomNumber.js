// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update the number in the dice box
function updateNumber() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const resultEl = document.getElementById("result");
    const dice = document.querySelector('.dice');

    if (isNaN(min) || isNaN(max) || min > max) {
        resultEl.textContent = "Please enter positive numbers only.";
        dice.style.background = "linear-gradient(145deg, #aaa, #666)"; // gray on error
        return;
    }

    // Generate the random number
    const randomNum = getRandomNumber(min, max);
    resultEl.textContent = randomNum;

    // Add the shake/animation effect
    dice.classList.add('animate');

    // Optional: change dice gradient randomly for extra flair
    const colors = [
        ["#ff8a00", "#e52e71"],
        ["#4facfe", "#00f2fe"],
        ["#43e97b", "#38f9d7"],
        ["#fa709a", "#fee140"]
    ];
    const randColors = colors[Math.floor(Math.random() * colors.length)];
    dice.style.background = `linear-gradient(145deg, ${randColors[0]}, ${randColors[1]})`;

    // Remove animation after 300ms
    setTimeout(() => {
        dice.classList.remove('animate');
    }, 300);
}

// Event listener for the button
document.getElementById("generateNumber").addEventListener("click", updateNumber);