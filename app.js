const valueChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return valueChoice[Math.floor(Math.random() * valueChoice.length)];
}

let userScore = 0;
let computerScore = 0;

function playRound(userSelection, computerSelection){
    userSelection = prompt("What is your choice?");
    computerSelection = getComputerChoice();
    if (userSelection == computerSelection){
        console.log('It\'s a tie!');
    }
    else if ((userSelection == "Rock" && computerSelection == "Scissors") ||
            (userSelection == "Scissors" && computerSelection == "Paper") ||
            (userSelection == "Paper" && computerSelection == "Rock")){
        console.log("User win!");
        console.log(userSelection)
        console.log(computerSelection);
        userScore++;
    }
    else {
        console.log("Computer wins");
        computerScore++;
    }
    return {userSelection, computerSelection};
}

function game(){
    while(userScore < 5 || computerScore<=5){
    playRound();
    console.log("User Score=" + userScore);
    console.log("Computer Score:" + computerScore);
    }
}