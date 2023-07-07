//The zero index is the hand, the first index is what it beats
let rock=['rock','scissors']
let paper=['paper','rock']
let scissors=['scissors','paper']
//generate either 0,1 or 2 randomly
//assign a hand based on r.n.g
function getComputerSelection(){
    let computerSelection=Math.floor(Math.random()*3)
    if(computerSelection===0)computerSelection=rock
    if(computerSelection===1)computerSelection=paper
    if(computerSelection===2)computerSelection=scissors
    console.log(computerSelection)
}