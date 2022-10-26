const choices = ["Rock", "Paper", "Scissors"];

// Defines initial values of variables
let playerSelection = "";
let score = 0;
let compScore = 0;

// DOM selectors
const outputDiv = document.querySelector('.output');
const scoreDiv = document.querySelector('.score');
const compScoreDiv = document.querySelector('.comp-score');
const winnerDiv = document.querySelector('.winner');

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

function playRound(playerSelection, computerSelection) {
  // playerSelection = Rock
  if (playerSelection == "ROCK" && computerSelection == "Paper") {
    console.log("You lose!  Paper covers rock :/");
    outputDiv.textContent = "You lose!  Paper covers rock :/";
    compScore++;
    compScoreDiv.textContent = compScore;
  } else if (
    playerSelection == "ROCK" &&
    computerSelection == "Scissors"
  ) {
    console.log("You win!  Rock breaks scissors! :D");
    outputDiv.textContent = "You win!  Rock breaks scissors! :D";
    score++;
    scoreDiv.textContent = score;
  } else if (
    playerSelection == "ROCK" &&
    computerSelection == "Rock"
  ) {
    console.log("It's a draw!");
    outputDiv.textContent = "It's a draw!";
    // playerSelection = Paper
  } else if (
    playerSelection == "PAPER" &&
    computerSelection == "Rock"
  ) {
    console.log("You win!  Paper covers rock! :D");
    outputDiv.textContent = "You win!  Paper covers rock! :D";
    score++;
    scoreDiv.textContent = score;
  } else if (
    playerSelection == "PAPER" &&
    computerSelection == "Scissors"
  ) {
    console.log("You lose!  Scissors cuts paper :/");
    outputDiv.textContent = "You lose!  Scissors cuts paper :/";
    compScore++;
    compScoreDiv.textContent = compScore;
  } else if (
    playerSelection == "PAPER" &&
    computerSelection == "Paper"
  ) {
    console.log("It's a draw!");
    outputDiv.textContent = "It's a draw!";
    // playerSelection = Scissors
  } else if (
    playerSelection == "SCISSORS" &&
    computerSelection == "Scissors"
  ) {
    console.log("It's a draw!");
    outputDiv.textContent = "It's a draw!";
  } else if (
    playerSelection == "SCISSORS" &&
    computerSelection == "Rock"
  ) {
    console.log("You lose!  Rock beats scissors :/");
    outputDiv.textContent = "You lose!  Rock beats scissors :/";
    compScore++;
    compScoreDiv.textContent = compScore;
  } else if (
    playerSelection == "SCISSORS" &&
    computerSelection == "Paper"
  ) {
    console.log("You win!  Scissors cuts paper! :D");
    outputDiv.textContent = "You win!  Scissors cuts paper! :D";
    score++;
    scoreDiv.textContent = score;
  }

  if (score == 5) {
    winnerDiv.textContent = "You win the match!";
    console.log("You win!");
  } 
  
  if (compScore == 5) {
      winnerDiv.textContent = "You lost the match.";
    };
}


// event listeners

// Rock button event listener
const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => {
  playerSelection = "ROCK";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

// Paper button event listener
const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => {
  playerSelection = "PAPER";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

// Scissors button event listener
const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => {
  playerSelection = "SCISSORS";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

