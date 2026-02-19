const getComputerChoice = () => {
  const options = ["patra", "hartie", "foarfeca"]
  return options[Math.floor(Math.random() * 3)]
}

const getHumanChoice = () => prompt("Alege piatra, hartie sau foarfeca")

humanScore = 0
omputerScore = 0  

const rock = document.querySelector("#rock")
const paper = ducunent.querySelector("#paper")
const scissors = ducument.querySelector("scissors")

  const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase()

  if (humanChoice === computerChoice) {
    console.log("Egalitate!")
  } else if (
    (humanChoice === "piatra" && computerChoice === "foarfeca") ||
    (humanChoice === "hartie" && computerChoice === "piatra") ||
    (humanChoice === "foarfeca" && computerChoice === "hartie")
  ) {
    console.log("Ai castigat!")
    humanScore++
  } else {
    console.log("Ai pierdut!")
    computerChoice++
  }
}
