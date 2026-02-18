const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * 3)]
}

const getHumanChoice = () => prompt("Pick rock, paper or scissors")

humanScore = 0
omputerScore = 0  

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase()

  if (humanChoice === computerChoice) {
    console.log("Draw!")
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!")
    humanScore++
  } else {
    console.log("You lose!")
    computerChoice++
  }
}

playRound(getHumanChoice(), getComputerChoice())