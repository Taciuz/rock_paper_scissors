const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
let usrScore = document.getElementById("usrScore");
let cpuScore = document.getElementById("cpuScore");
let playerScore = 0;
let computerScore = 0;

const valueChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return valueChoice[Math.floor(Math.random() * valueChoice.length)];
}

rockButton.addEventListener('click', () => handleClick("Rock"));
paperButton.addEventListener('click', () => handleClick("Paper"));
scissorsButton.addEventListener('click', () => handleClick("Scissors"));

function handleClick(playerSelection){
    playRound(playerSelection, getComputerChoice());
}

function playRound(userSelection, computerSelection){
    if (userSelection == computerSelection){
        console.log('It\'s a tie!');
    }
    else if ((userSelection == "Rock" && computerSelection == "Scissors") ||
            (userSelection == "Scissors" && computerSelection == "Paper") ||
            (userSelection == "Paper" && computerSelection == "Rock")){
        console.log("User win!");
        playerScore++;
        usrScore.textContent = `${playerScore}`;
    }
    else {
        console.log("Computer wins");
        computerScore++;
        cpuScore.textContent = `${computerScore}`;
    }
    return {userSelection, computerSelection};
}
