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