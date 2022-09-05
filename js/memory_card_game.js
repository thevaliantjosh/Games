"use strict"
//alert("Welcome to my Memory Card Game!");

//Constant that selects all class selectors of .memory-card

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard;
let secondCard;

//function that will
function flipCard() {
    // console.log("I was Clicked!");
    // console.log(this);
    //will add or remove the class list of "flip"
    this.classList.toggle("flip");
    if(!hasFlippedCard) {
        //first time user has clicked card
        hasFlippedCard = true;
        firstCard = this;
        // console.log({hasFlippedCard, firstCard});
        return;
    }
        //second click of Card
        hasFlippedCard = false;
        secondCard = this;
        // console.log({hasFlippedCard, secondCard})
        //do Cards Match?
        // console.log(firstCard.dataset.framework)
        // console.log(secondCard.dataset.framework)
        checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unFlipCards() {
    //not a match
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    }, 1500);
}

//Loop that will loop through the cards list, and attach an event listener, listening for a click even, when fired it executes a function flip card.
cards.forEach(card => card.addEventListener("click", flipCard));