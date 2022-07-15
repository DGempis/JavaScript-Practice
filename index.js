// Take Home Chalenge

const header = document.getElementById("header-ele")
const container = document.getElementById("root")

// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

const firstName = prompt("Please enter your first name.")
const lastName = prompt("Please enter your last name.")

console.log(firstName);
console.log(lastName);

alert(lastName);

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

const birthDate = prompt("Please enter your birthday.")
let birthConfirm = confirm(birthDate)
alert(birthDate)
