const rock=document.querySelector('.rock')
const paper=document.querySelector('.paper')
const scissor=document.querySelector('.scissor')
const resultMessage=document.querySelector('.top-message')
const choices=['rock','paper','scissor']
function getComputerchoice(){
    const randomIndex=Math.floor(Math.random()*3)
    return choices[randomIndex]
}
function determineWinner(playerChoice,computeChoice){
    if(playerChoice==computeChoice){
        return "Its a tie"
    }
    if(
        (playerChoice=='rock' && computeChoice=='paper')||
        (playerChoice=='paper' && computeChoice=='scissor')||
        (playerChoice=='scissor' && computeChoice=='rock')
    ){
        return "You lose"
    }
    else{
        return "you win"
    }
}
rock.addEventListener('click',()=>{
    const playerChoice='rock'
    const computerChoice=getComputerchoice();
    const result=determineWinner(playerChoice,computerChoice)
    resultMessage.textContent=`computer choose ${computerChoice},${result}`
})
paper.addEventListener('click',()=>{
    const playerChoice='paper'
    const computerChoice=getComputerchoice();
    const result=determineWinner(playerChoice,computerChoice)
    resultMessage.textContent=`computer choose ${computerChoice} ,${result}`
})
scissor.addEventListener('click',()=>{
    const playerChoice='scissor'
    const computerChoice=getComputerchoice();
    const result=determineWinner(playerChoice,computerChoice)
    resultMessage.textContent=`computer choose ${computerChoice},${result}`
})