//Code to play game in JavaScript console
const computerPlay = () => {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let random = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  
    return random;
  }
  
  const makeCaseInsensitive = (playerInput) => {
    playerInput = prompt("Rock, Paper, or Scissors? ");
  
    let firstLetter = playerInput.charAt(0);
    let capitalizeFirstLetter = firstLetter.toUpperCase();
  
  
    let restOfString = playerInput.slice(1,)
    let lowerCaseString = restOfString.toLowerCase();
  
    let fullString = `${capitalizeFirstLetter}${lowerCaseString}`;
    return fullString;
  }
  
  const playRound = (playerSelection, computerSelection) => {
    
      playerSelection = makeCaseInsensitive();
      computerSelection = computerPlay();
  
      console.log("playerInput: ", playerSelection);
      console.log("computerInput: ", computerSelection);
  
      if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "Computer Wins!";
      } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win!";
      }
  
      if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "Computer Wins!";
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win!";
      }
  
      if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "Computer Wins!";
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win!";
      }
  
      if (computerSelection === playerSelection) {
          return "Tie!";
      }
     
  }
  
  
  let playerWin = "You Win!";
  let computerWin = "Computer Wins!";
  let gameTie = "Tie!";
  let playerScoreCount = 0;
  let computerScoreCount = 0;
  
  
  const game = (result) => {
    
    for (let gameRound = 0; gameRound < 30; gameRound++) {
        result = playRound();
        if (result === playerWin) {
            playerScoreCount ++;
            console.log("player score: ", playerScoreCount);
          } 
  
          if (result === computerWin) {
            computerScoreCount ++;
            console.log("computer score: ", computerScoreCount);
          }
  
          if (playerScoreCount === 5 || computerScoreCount === 5) {
            break;
          }
        } 
  }
  
  const congratsWinner = () => {
    if (playerScoreCount === 5) {
        return "Congratulations! You've Won!";
      } 
    
      if (computerScoreCount === 5) {
        return "Computer Wins. Play again?";
    }
  }
  
  computerPlay();
  console.log(game());
  console.log(congratsWinner());