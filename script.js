//name property is the hand itself, beats is what it wins against

let rock={name:'rock',beats:'scissors'}
let paper={name:'paper',beats:'rock'}
let scissors={name:'scissors',beats:'paper'}
//generate either 0,1 or 2 randomly
//assign a hand based on r.n.g

function getComputerSelection(){
    let computerSelection=Math.floor(Math.random()*3)
    if(computerSelection===0)computerSelection=rock
    if(computerSelection===1)computerSelection=paper
    if(computerSelection===2)computerSelection=scissors
    return computerSelection
}

//

function playRound(playerSelection){
    let computerSelection=getComputerSelection()
    let playerScore=0
    let computerScore=0
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
    resultOfRound=document.createElement('p')
    resultOfRound.textContent=resultMessage
    resultsSection.appendChild(resultOfRound)
    
    return result
}

let btns=document.querySelectorAll('.btn')
btns.forEach(button=>{
    button.addEventListener('click',()=>
    {function getPlayerSelection(){
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
    return playerSelection
}
    playRound(getPlayerSelection)
}
)
})
