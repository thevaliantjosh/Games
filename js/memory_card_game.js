"use strict"
//alert("Welcome to my Memory Card Game!");

//Constant that selects all class selectors of .memory-card

const cards = document.querySelectorAll(".memory-card");

//function that will
function flipCard() {
    // console.log("I was Clicked!");
    // console.log(this);
    //will add or remove the class list of "flip"
    this.classList.toggle("flip");
}

//Loop that will loop through the cards list, and attach an event listener, listening for a click even, when fired it executes a function flip card.
cards.forEach(card => card.addEventListener("click", flipCard));