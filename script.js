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
        result='loss'
    }
console.log(resultMessage)
return result
}
function game(){
let finalMessage
let score=0
for (i=0;i<5;i++){
  let result=playRound()
if(result==='win') {
    score=++score
}else if (result==='tie') {
    score+=0
    i=--i
}else {
    score+=0
}
  if(i===4) {
    if(score>2.5){
    finalMessage=console.log(`You had a score of ${score},You win`)
    }else if(score===2.5){
    finalMessage=console.log(`You had a score of ${score},It's a tie`)
    }else {
    finalMessage=console.log(`You had a score of ${score},You lose`)
    }
  }  
}
return finalMessage
}