// variables

let cards = document.querySelectorAll('.card')

// a flip card function that toggles a flip on click
function flipCard() {
    this.classList.toggle('flip');
}


cards.forEach(card => card.addEventListener('click', flipCard));






// add a moves decrement that decreases each time the player completes a flip cycle

// let counter;
// let moves = 6;

// function moveCounter() {
//     moves--;
//     counter.innerHTML = moves;
// }




























