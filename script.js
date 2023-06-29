function getComputerChoice() {
    let computerSelection
    computerSelection=Math.random()
    if (computerSelection<=(1/3)) {
        computerSelection='rock'
    } else if (computerSelection>(1/3)&&computerSelection<=(2/3)) {
        computerSelection='paper'
    } else{
        computerSelection='scissors'
    }
    return computerSelection
}
function getUserChoice() {
    let playerSelection
    playerSelection=prompt('choose your hand!').toLowerCase()
    return playerSelection
}