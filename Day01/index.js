let containerOne = document.getElementById("root")
let headerOne = document.querySelector(".header-one")
let firstButton = document.querySelector(".first-btn")

headerOne.addEventListener("click", function(){
    headerOne.textContent = "This Event Listener Works!"
})

firstButton.addEventListener("click", function(){
    headerOne.textContent = "This Button's Event Listener Also Works!"
    headerOne.style.color = 'red';
})

// This is a single line comment

/* This is a 
multi line comment */

const favoriteFood = "pizza"
const name = "Danzel"

console.log(favoriteFood);
console.log(`My favorite food is ${favoriteFood}.`);
console.log(`My name is ${name}.`);