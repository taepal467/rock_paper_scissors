
const computerWeapon = () => {
  let gameChoices = ["🪨", "📜", "✂"];
  let random = gameChoices[Math.floor(Math.random() * gameChoices.length)];

  let computerWeapon = document.querySelector(".computer-weapon");
  computerWeapon.textContent = random;

  return random;
}

const playRound = () => {
  const buttons = document.getElementsByClassName('btn');
  const winningMessage = document.querySelector(".winner-message");
  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");
  let playerScoreCount = 0;
  let computerScoreCount = 0;

  for  (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", computerWeapon);
  }

  for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click' , () => {
      let playerSelection = buttons[i].textContent;
      document.querySelector(".player-weapon").textContent = playerSelection;
      
      computerSelection = computerWeapon();
    
      if (computerSelection === "📜" && playerSelection === "🪨") {
        computerScoreCount ++;
        computerScore.textContent = computerScoreCount;
        winningMessage.textContent = "You Lose! Paper beats Rock";
      } else if (playerSelection === "📜" && computerSelection === "🪨") {
        playerScoreCount ++;
        playerScore.textContent = playerScoreCount;
        winningMessage.textContent = "You Win!";
      }
    
      if (computerSelection === "✂" && playerSelection === "📜") {
        computerScoreCount ++;
        computerScore.textContent = computerScoreCount;
        winningMessage.textContent = "You Lose! Scissors beats Paper";
      } else if (playerSelection === "✂" && computerSelection === "📜") {
        playerScoreCount ++;
        playerScore.textContent = playerScoreCount;
        winningMessage.textContent = "You Win!";
      }
    
      if (computerSelection === "🪨" && playerSelection === "✂") {
        computerScoreCount ++;
        computerScore.textContent = computerScoreCount;
        winningMessage.textContent = "You Lose! Rock beats Scissors";
      } else if (playerSelection === "🪨" && computerSelection === "✂") {
        playerScoreCount ++;
        playerScore.textContent = playerScoreCount;
        winningMessage.textContent = "You Win!";
      }
    
      if (computerSelection === playerSelection) {
        winningMessage.textContent = "It's a Tie!";
      } else if (playerScoreCount === 5) {
        popUpHeader.textContent = "Congratulations, You won the game!";
      } else if (computerScoreCount === 5) {
        popUpHeader.textContent = "You Lost!";
      }

     if(playerScoreCount === 5 || computerScoreCount === 5) {
       popUpWindow();
      }
    }); 
  }
}

playRound();

//Pop up window
const play = document.querySelector(".play-btn");
const popup = document.getElementById("popUp");
const popUpHeader = document.querySelector(".popup-header");


const popUpWindow = () => {
  popup.classList.toggle("open-popUp");
}

play.addEventListener("click", popUpWindow);

play.addEventListener("click", (e) => {
  popup.classList.toggle("open-popUp");
  window.location.reload();
});















