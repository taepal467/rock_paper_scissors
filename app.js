
const buttons = document.getElementsByClassName('btn');

const playerWeapon = () => {
  for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click' , () => {
      let playerSelection = buttons[i].textContent;
      document.querySelector(".player-weapon").textContent = playerSelection;
      console.log("playerOption: ",playerSelection);    
    }); 
  }
}

const computerWeapon = () => {
  let gameChoices = ["🪨", "📜", "✂"];
  let random = gameChoices[Math.floor(Math.random() * gameChoices.length)];

  let computerWeapon = document.querySelector(".computer-weapon");
  computerWeapon.textContent = random;
  console.log("computerOption: ",random);

  return random;
}

const selectedWeapons = () => {
  for  (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", computerWeapon);
  }
}

const playRound = (playerSelection, computerSelection) => {
  
  playerSelection = playerWeapon();
  computerSelection = selectedWeapons();

  console.log("playerWeapon: ", playerSelection);
  console.log("computerWeapon: ", computerSelection);

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
 
}


console.log("playRound: ", playRound());
















