//declaring global variables

let rock={name:'rock',beats:'scissors',}
let paper={name:'paper',beats:'rock',}
let scissors={name:'scissors',beats:'paper',}
let playerScore=0
let computerScore=0
//randomly generate computer selection

function getComputerSelection(){
    let computerSelection=Math.floor(Math.random()*3)
    if(computerSelection===0)computerSelection=rock
    if(computerSelection===1)computerSelection=paper
    if(computerSelection===2)computerSelection=scissors
    return computerSelection
}
//add event listener to each button

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
                resultMessage=`You win !${playerSelection.name} beats ${computerSelection.name} `
                result='win'
            }else if (computerSelection.beats===playerSelection.name){
                resultMessage=`You lose !${computerSelection.name} beats ${playerSelection.name} `
                result='loss'
            }else{
                resultMessage='It\'s a tie!'
                result='tie'
            }
//increment scores based on result of round           
            if(result==='win'){
                ++playerScore
            }else if(result==='loss'){
                ++computerScore
            }
//display round results on DOM
            resultsSection=document.querySelector('.results-section')
            resultsSection.textContent=resultMessage
            playerScoreDOM=document.querySelector('.player-score')
            playerScoreDOM.textContent=`Your score:${playerScore}`
            computerScoreDOM=document.querySelector('.computer-score')
            computerScoreDOM.textContent=`Computer score: ${computerScore}`

            finalResult=document.createElement('p')
            if(playerScore===5){
            finalResult.textContent=`You win! ,${playerScore} to ${computerScore}`
                
            }
            if(computerScore===5){
                finalResult.textContent=`You lose! ,${playerScore} to ${computerScore}`
            }
            document.querySelector('.new-game').appendChild(finalResult)
//restarts game after either player wins,resets variables,clears DOM,creates a new game button
            if(playerScore===5||computerScore===5){
                btns.forEach(button=>{
                    button.disabled=true
                })
                computerScore=0
                playerScore=0
                playerScoreDOM.textContent=`Your score: `
                resultsSection.textContent=''
                computerScoreDOM.textContent=`Computer score: `
//creates new game button in the new game section
                newGameButton=document.createElement('button')
                newGameButton.textContent='start a new game?'
                newGameButton.classList.add('btn')
                document.querySelector('.new-game').appendChild(newGameButton)
//adds an event listener that,upon being clicked, starts a new game and deletes the new game button
            newGameButton.addEventListener('click',()=>{
                newGameButton.remove()
                finalResult.remove()
                btns.forEach(button=>{
                    button.disabled=false
                }) 
            })
            }        
    })
})





