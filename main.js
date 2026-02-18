const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"]
  return options[Math.floor(Math.random() * 3)]
}

const getHumanChoice = () => prompt("Pick rock, paper or scissors")