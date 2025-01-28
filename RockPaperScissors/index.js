const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // Reset resultDisplay class
    resultDisplay.classList.remove("greenText", "redText");

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "You Win" : "You Lose";
                break;
            case "paper":
                result = computerChoice === "rock" ? "You Win" : "You Lose";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "You Win" : "You Lose";
                break;
        }
    }

    playerDisplay.textContent = `You chose ${playerChoice}`;
    computerDisplay.textContent = `Computer chose ${computerChoice}`;
    resultDisplay.textContent = result;

    if (result === "You Win") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    } else if (result === "You Lose") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
}
