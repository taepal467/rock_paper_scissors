
const computerWeapon = () => {
  let gameChoices = ["🪨", "📜", "✂"];
  let random = gameChoices[Math.floor(Math.random() * gameChoices.length)];

  let computerWeapon = document.querySelector(".computer-weapon");
  computerWeapon.textContent = random;

  return random;
}

const playRound = () => {
  const buttons = document.getElementsByClassName('btn');

  for  (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", computerWeapon);
  }

  for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click' , () => {
      let playerSelection = buttons[i].textContent;
      document.querySelector(".player-weapon").textContent = playerSelection;
      
      computerSelection = computerWeapon();

      console.log("playerOption2: ", playerSelection);
      console.log("computerOption2: ", computerSelection);
    
      if (computerSelection === "📜" && playerSelection === "🪨") {
        console.log("Computer Wins!");
      } else if (playerSelection === "📜" && computerSelection === "🪨") {
        console.log("You Win!");
      }
    
      if (computerSelection === "✂" && playerSelection === "📜") {
        console.log("Computer Wins!");
      } else if (playerSelection === "✂" && computerSelection === "📜") {
        console.log("You Win!");
      }
    
      if (computerSelection === "🪨" && playerSelection === "✂") {
        console.log("Computer Wins!");
      } else if (playerSelection === "🪨" && computerSelection === "✂") {
        console.log("You Win!");
      }
    
      if (computerSelection === playerSelection) {
          console.log("Tie!");
      }

      if (playerWin) {
        playerScoreCount ++;
        console.log("player score: ", playerScoreCount);
      } 

      if (computerWin) {
        computerScoreCount ++;
        console.log("computer score: ", computerScoreCount);
      }

      // if (playerScoreCount === 5 || computerScoreCount === 5) {
      //   break;
      // }
    }); 
  }
}

let playerWin = "You Win!";
let computerWin = "Computer Wins!";
let gameTie = "Tie!";
let playerScoreCount = 0;
let computerScoreCount = 0;

playRound();
















