let randomNumber=parseInt(Math.random()*100+1) //adding +1 to avoid 0

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){

    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number greater than 1!')
    }
    else if(guess>100){
        alert('Please enter a number less than 100!')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuesses(prevGuess)
            displayMessage(`Game Over!Random Number was ${randomNumber}`)
            endGame()
        
        }
        else{
            displayGuesses(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess}!`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Wrong! Guess Higher')
    }
    else if(guess > randomNumber){
        displayMessage('Wrong! Guess Lower')
    }

}
function displayGuesses(guess){
    userInput.values=''
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`

}
function displayMessage(message){

    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){

   const newGameButton=document.getElementById('newGame')
   newGameButton.addEventListener('click',function(e){

    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''  
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')  //enabling the input field
    startOver.removeChild(p)
    playGame=true
   })
}

function endGame(){

    userInput.value=''
    //making sure that the user can't enter any more guesses
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame();
}