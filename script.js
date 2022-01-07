// variables for flipCard function
let cards = document.querySelectorAll('.card')

cards.forEach(card => card.addEventListener('click', flipCard));

// variables for moveCounter function
let counter = document.querySelector('.moves')
let moves = 7;

// variables for first and second choice function
let firstChoice = null;
let secondChoice = null;
let firstDiv = null;
let secondDiv = null;


// variables for matchCounter function
let matched = document.querySelector('.matches')
let matches = 0;
let win = cards.length/2;

// variables for lose state reset button
let button = document.querySelector('.btn')
button.addEventListener('click', reset)

// variables for win state reset button
let button1 = document.querySelector('.btn1')
button1.addEventListener('click', reset)



// game over variables
gameOverMenu = document.getElementById("gameOver")

// win menu variables
playAgainMenu = document.getElementById("winGame")


shuffle();


// a flip card function that toggles a flip on click
function flipCard() {
    // this.style.backgroundColor = 'red'
    if(firstChoice === null) {
        firstDiv = this
        firstChoice = this.dataset.name
        console.log(firstChoice)
    } else {
        secondDiv = this
        secondChoice = this.dataset.name
        console.log(secondChoice)
        checkForMatch()
        
    }
}

function checkForMatch() {
    if(firstChoice === secondChoice) {
        console.log("match")
        firstChoice = null;
        secondChoice = null;
        firstDiv = null;
        secondDiv = null;
        matches++
        matchCounter()
        

    } else {
        console.log('no match')
        firstChoice = null;
        secondChoice = null;
        // firstDiv.style.backgroundColor = ''
        firstDiv = null;
        // secondDiv.style.backgroundColor = ''
        secondDiv = null;
        moveCounter()
        

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
    showWinMenu(state);
}

function displayMenu(menu) {
    menu.style.visibility = 'visible'
}

function showWinMenu(state) {
    if (state == 'GAME OVER') {
        displayMenu(gameOverMenu);
    }
}

// win game menu
function setWinState(state) {
    showLoseMenu(state)
}

function showLoseMenu(state) {
    if (state == "Congratulations! You've matched them all!") {
        displayMenu(playAgainMenu);
    }
}



// add a function that resets the board when clicked on

function reset() {
    shuffle()
 }

