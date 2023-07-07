let rock={name:'rock',beats:'scissors'}
let paper={name:'paper',beats:'rock'}
let scissors={name:'scissors',beats:'paper'}
let playerScore=0
let computerScore=0

function getComputerSelection(){
    let computerSelection=Math.floor(Math.random()*3)
    if(computerSelection===0)computerSelection=rock
    if(computerSelection===1)computerSelection=paper
    if(computerSelection===2)computerSelection=scissors
    return computerSelection
}

let btns=document.querySelectorAll('.btn')
btns.forEach(button=>{
    button.addEventListener('click',playGame=()=>{
            let playerSelection
            let id=button.id
            if(id==='rock'){
                playerSelection=rock
            }
            if(id==='paper'){
                playerSelection=paper
            }
            if(id==='scissors'){
                playerSelection=scissors
            }
            let computerSelection=getComputerSelection()
            let resultMessage
            let result
            if(computerSelection.name===playerSelection.beats){
                resultMessage=`You win!${playerSelection.name} beats ${computerSelection.name} `
                result='win'
            }else if (computerSelection.beats===playerSelection.name){
                resultMessage=`You lose!${computerSelection.name} beats ${playerSelection.name} `
                result='loss'
            }else{
                resultMessage='It\'s a tie!'
                result='tie'
            }
            
            
            if(result==='win'){
                ++playerScore
            }else if(result==='loss'){
                ++computerScore
            }
            resultsSection=document.querySelector('.results-section')
            resultsSection.textContent=resultMessage
            playerScoreDOM=document.querySelector('.player-score')
            playerScoreDOM.textContent=`Your score:${playerScore}`
            computerScoreDOM=document.querySelector('.computer-score')
            computerScoreDOM.textContent=`Computer score: ${computerScore}`

if(playerScore===5||computerScore===5){
//disable further play until player starts a new game
    btns.forEach(button=>{
        button.disabled=true
    })
//resets everything to intial values
    playerScore=0
    playerScoreDOM.textContent=`Your score: `
    computerScore=0
    resultsSection.textContent=''
    computerScoreDOM.textContent=`Computer score: `
//creates new game button in the new game section
    newGameButton=document.createElement('button')
    newGameButton.textContent='start a new game?'
    document.querySelector('.new-game').appendChild(newGameButton)
//creates an event listener that,upon being clicked, starts a new game and deletes itself
    newGameButton.addEventListener('click',()=>{
        btns.forEach(button=>{
            button.disabled=false
            newGameButton.remove()
        })
    })
}        
})
    
})





