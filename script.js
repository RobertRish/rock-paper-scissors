const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  // playerSelection = Rock
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper") {
    console.log("You lose!  Paper covers rock :/");
    window.alert("You lose!  Paper covers rock :/");
  } else if (
    playerSelection.toUpperCase() == "ROCK" &&
    computerSelection == "Scissors"
  ) {
    console.log("You win!  Rock breaks scissors! :D");
    window.alert("You win!  Rock breaks scissors! :D");
    score++;
  } else if (
    playerSelection.toUpperCase() == "ROCK" &&
    computerSelection == "Rock"
  ) {
    console.log("It's a draw!");
    window.alert("It's a draw!");
    // playerSelection = Paper
  } else if (
    playerSelection.toUpperCase() == "PAPER" &&
    computerSelection == "Rock"
  ) {
    console.log("You win!  Paper covers rock! :D");
    window.alert("You win!  Paper covers rock! :D");
    score++;
  } else if (
    playerSelection.toUpperCase() == "PAPER" &&
    computerSelection == "Scissors"
  ) {
    console.log("You lose!  Scissors cuts paper :/");
    window.alert("You lose!  Scissors cuts paper :/");
  } else if (
    playerSelection.toUpperCase() == "PAPER" &&
    computerSelection == "Paper"
  ) {
    console.log("It's a draw!");
    window.alert("It's a draw!");
    // playerSelection = Scissors
  } else if (
    playerSelection.toUpperCase() == "SCISSORS" &&
    computerSelection == "Scissors"
  ) {
    console.log("It's a draw!");
    window.alert("It's a draw!");
  } else if (
    playerSelection.toUpperCase() == "SCISSORS" &&
    computerSelection == "Rock"
  ) {
    console.log("You lose!  Rock beats scissors :/");
    window.alert("You lose!  Rock beats scissors :/");
  } else if (
    playerSelection.toUpperCase() == "SCISSORS" &&
    computerSelection == "Paper"
  ) {
    console.log("You win!  Scissors cuts paper! :D");
    window.alert("You win!  Scissors cuts paper! :D");
    score++;
  }
}

// const playerSelection = "sciSsors";
// const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));
// playRound(playerSelection, computerSelection);
let score = 0;

function game() {
  window.alert(
    "Hello!  Let's play the cult classic game, 'Rock, Paper, Scissors'!  When you click 'OK' below, you will start a game of rock, paper, scissors against a computer consisting of 5 rounds.  At the end of the 5 rounds, your score will be displayed.  Good luck!"
  );
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  }

  console.log("You got a score of: " + score);
  window.alert("You got a score of: " + score);
}

game();
