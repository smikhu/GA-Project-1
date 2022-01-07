// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./styles.css">
//     <script defer src="./script.js"></script>
//     <title>Document</title>
// </head>
// <body>
//     <!-- <div class="title">
//         <h1>Gwent Matching</h1>
//     </div> -->
//     <div class="text">
//         <div>Moves: <span class="moves">7</span></div>
//     </div>

//     <div class="text">
//         <div>Matched: <span class="matched">0</span></div>
//     </div>
//     <section class="grid">
//         <!-- set data name on the card itself -->
//         <div class="card">
//             <img src="./images/geralt.png" data-name="geralt" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="geralt" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/geralt.png" data-name="geralt" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="geralt" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/yennefer.png" data-name="yennefer" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="yennefer" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/yennefer.png" data-name="yennefer" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="yennefer" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/triss.png" data-name="triss" class="front" alt="">
//             <!-- <img src="./images/back.png"  data-name="triss" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/triss.png" data-name="triss" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="triss" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/vesemir.png" data-name="vesemir" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="vesemir" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/vesemir.png" data-name="vesemir" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="vesemir" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/dandelion.png" data-name="dandelion" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="dandelion" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/dandelion.png" data-name="dandelion" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="dandelion" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/dijkstra.png" data-name="dijkstra" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="dijkstra" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/dijkstra.png" data-name="dijkstra" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="dijkstra" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/cirilla.png" data-name="cirilla" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="cirilla" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/cirilla.png" data-name="cirilla" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="cirilla" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/roche.png" data-name="roche" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="roche" class="back" alt=""> -->
//         </div>
//         <div class="card">
//             <img src="./images/roche.png" data-name="roche" class="front" alt="">
//             <!-- <img src="./images/back.png" data-name="roche" class="back" alt=""> -->
//         </div>
//     </section>

// </body>
// </html>




















































// variables
let numberOfFlippedCards = 0;

// variables for moveCounter function
let counter = document.querySelector('.moves')
let moves = 7;

// variables for flipCard function
let cards = document.querySelectorAll('.card')


// variables for first and second choice function
let firstChoice = null;
let secondChoice = null;
let firstDiv = null;
let secondDiv = null;

// a flip card function that toggles a flip on click
function flipCard(event) {

    console.log(event.target)
    
    console.log(numberOfFlippedCards)
    
    // increment the flippedCard counter

    numberOfFlippedCards++

    // check how many cards we have flipped

    if (numberOfFlippedCards === 1) {
        // save it as firstChoice
        firstChoice = event.target
        firstDiv = event.target.parentNode
        event.target.classList.toggle('flip');
        
    
    } else {
        // save as secondChoice
        this.classList.toggle('flip');
        secondChoice = event.target
        secondDiv = event.target.parentNode
        // reset
        numberOfFlippedCards = 0;

        // check for match or mismatch for first and second click and then flip the cards to back side

        if (firstChoice.dataset.name === secondChoice.dataset.name) {
           firstDiv.removeEventListener('click', flipCard)
           secondDiv.removeEventListener('click', flipCard)
        } else {
            firstChoice.classList.remove('flip')
            secondChoice.classList.remove('flip')
            moveCounter();
            console.log("The first choice is", firstChoice)
            console.log("The second choice is", secondChoice)
            
        }

        
    }
    
    
    // if this is the first card to be flipped, then just flip it (line 18) but then also to set it as firstChoice
    // but if its the second card thats being flipped, check to see if it matches with first

}

cards.forEach(card => card.addEventListener('click', flipCard));

// add a function that allows me to match and mismatch 2 cards

// i need to be able to click two cards but need to cancel out a third click (or maybe set a timer?)
// if the two cards dont match, they need to flip back
// if the two cards DO match, i need them to stay revealed and not be able to click them again(maybe even set an alert using bootstrap animation?)




// add a shuffle function that randomly distributes the cards in random spots every time page is loaded (or maybe when reset button is clicked as well)

function shuffle() {
    cards.forEach(card => {
        let mixAndMatch = Math.floor(Math.random() * 16);
        card.style.order = mixAndMatch
    });
}

shuffle();
// add a function that alerts the user that they have used all their moves (game over) and resets the game



// add a moves decrement that decreases each time the player completes a flip cycle (2 flips)

function moveCounter() {
    moves--;
    counter.innerHTML = moves;
    if (moves === 0) {
        stop();
        alert('Out of lives!')
    }
}