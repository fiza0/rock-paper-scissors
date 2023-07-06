console.log(game())
function getComputerChoice() {
    let computerSelection
    computerSelection=Math.floor(Math.random()*3)
    switch(computerSelection){
        case 0:
            computerSelection='rock'
        break;
        case 1:
            computerSelection='paper'
        break;
        case 2:
            computerSelection='scissors'
        break
    }
    return computerSelection
}
function getPlayerChoice() {
    let playerSelection
    playerSelection=prompt('choose your hand!').toLowerCase().trim()
    return playerSelection
}
function playRound() {
    let computerSelection=getComputerChoice()
    let playerSelection=getPlayerChoice()
    let resultMessage
    let result
    if(computerSelection===playerSelection){
        resultMessage='It\'s a tie!'
        result='tie'
    } else if (playerSelection==='rock'&&computerSelection==='scissors') {
        resultMessage='You win! rock beats scissors'
        result='win'
    } else if (playerSelection==='scissors'&&computerSelection==='rock') {
        resultMessage='You lose! rock beats scissors'
        result='loss'
    } else if (playerSelection==='paper'&&computerSelection=='rock') {
        resultMessage='You win! paper beats rock'
        result='win'
    } else if (playerSelection==='rock'&&computerSelection==='paper') {
        resultMessage='You lose! paper beats rock'
        result='loss'
    } else if(playerSelection==='scissors'&&computerSelection==='paper') {
        resultMessage='You win! scissors beats rock'
        result='win'
    } else if(playerSelection==='paper'&&computerSelection==='scissors'){
        resultMessage='You lose! rock beats scissors'
        result='loss'
    } else{
        resultMessage='not a real hand!'
        result='tie'
    }
console.log(resultMessage)
return result
}
