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
function getPlayerChoice() {
    let playerSelection
    playerSelection=prompt('choose your hand!').toLowerCase()
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
    }
console.log(resultMessage)
return result
}
function game(){
for (i=0;i<=5;i++){
    
}
}