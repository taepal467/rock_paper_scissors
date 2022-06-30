//Create a function called computerPlay
const computerPlay = () => {
    //randomly return rock, paper, or scissors
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let random = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  
    return random;
}

const playRound = (playerSelection, computerSelection) => {
      //need to make playerSelection case-insensitive
        playerSelection = " ";
        playerSelection.toLowerCase();
        playerSelection = prompt("rock")

        if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }

        return playerSelection;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log("computer: ", computerPlay());
// console.log("player: ", playRound());