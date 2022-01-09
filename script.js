// variables for flipCard function
let cards = document.querySelectorAll('.card')

cards.forEach(card => card.addEventListener('click', flipCard));

// variables for moveCounter function
let counter = document.querySelector('.moves')
let moves = 7;

// variables for first and second choice function
let firstChoice = null;
let secondChoice = null;

// variables for matchCounter function
let matched = document.querySelector('.matches')
let matches = 0;
let win = cards.length/2;

// variables for lose state reset button
let resetButton = document.querySelector('.btn')
resetButton.addEventListener('click', reset)

// variables for win state reset button
let winButton = document.querySelector('.btn1')
winButton.addEventListener('click', reset)

// game over variables
gameOverMenu = document.getElementById("gameOver")

// win menu variables
playAgainMenu = document.getElementById("winGame")

shuffle();

// a flip card function that toggles a flip on click
function flipCard(event) {
    if(firstChoice === null) {
        firstChoice = event.target
        console.log(firstChoice)
        event.target.src = `./images/${this.dataset.name}.png`
    } else {
        
        secondChoice = event.target
        console.log(secondChoice)
        event.target.src = `./images/${this.dataset.name}.png`
        checkForMatch() 
    }
}

// a function to reset all the cards to the back side when reset button is clicked
function resetAllCards() {
    document.querySelectorAll('.front').forEach( (card) => {
        card.src = './images/back.png'
}) 
}


// a function that checks to see if the cards match or not
function checkForMatch() {
    console.log('checkForMatch is being run')
    console.log('firstChoice is', firstChoice)
    console.log('secondChoice is', secondChoice)
    
    if(firstChoice.dataset.name === secondChoice.dataset.name) {
        // if they match, i want the cards to stay flipped over
        console.log("match")
        firstChoice = null;
        secondChoice = null;
        matches++
        matchCounter()
    } else {
        // if they DONT match, flip them back to cover
        console.log('no match')
        setTimeout(function () {
        firstChoice.src = './images/back.png'
        secondChoice.src = './images/back.png'
        // setTimeOut make line 84 happen AFTER a slight delay (images turning too fast)
        firstChoice = null;
        secondChoice = null;
        moveCounter()
    }, 1000)
    }
}

// add a shuffle function that randomly distributes the cards in random spots every time page is loaded (or maybe when reset button is clicked as well)

function shuffle() {
    cards.forEach(card => {
        let mixAndMatch = Math.floor(Math.random() * 16);
        card.style.order = mixAndMatch
    });
}

// add a moves decrement that decreases each time the player completes a flip cycle (2 flips)

function moveCounter() {
    moves--;
    counter.innerHTML = moves;
    if (moves === 0) {
        setLoseState('GAME OVER');
    }
}

// add a function that alerts the user that they have used all their moves (game over) and resets the game

function matchCounter() {
    matched.innerHTML = matches;
    if (matches == win) {
        setWinState("Congratulations! You've matched them all!")
    }
}

// game over menu
function setLoseState(state) {
    showLoseMenu(state);
}

function displayMenu(menu) {
    menu.style.visibility = 'visible'
}

function showLoseMenu(state) {
    if (state == 'GAME OVER') {
        displayMenu(gameOverMenu);
    }
}

// win game menu
function setWinState(state) {
    showWinMenu(state)
}

function showWinMenu(state) {
    if (state == "Congratulations! You've matched them all!") {
        displayMenu(playAgainMenu);
    }
}

// add a function that resets the board when clicked on

function reset() {
    resetAllCards()
    shuffle()
    gameOverMenu.style.visibility = 'hidden'
    playAgainMenu.style.visibility = 'hidden'
    moves = 7;
    matches = 0;
    matched.innerHTML = matches;
    counter.innerHTML = moves;
 }

