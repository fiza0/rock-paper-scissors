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


function playRound(playerSelection,computerSelection) {
    let resultMessage
    let result
    computerSelection=getComputerChoice()
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
const results=document.querySelector('.results-container')
let resultMessageshown=document.createElement('p')
resultMessageshown.textContent=resultMessage
results.appendChild(resultMessageshown)
return result
}
const buttons=document.querySelectorAll('.btn')
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        playRound(button.id)
    })
})



