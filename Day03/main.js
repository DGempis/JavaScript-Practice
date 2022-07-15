// Daily Challenge

const header = document.getElementById("header-ele")
const container = document.getElementById("root")

// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

let firstName = prompt('Please enter your first name')
console.log(firstName);
alert(`Welcome ${firstName}`);

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

const firstNumber = prompt("Enter a number.", "10")
const secondNumber = prompt("Enter another number.", "10")

const firstInt = parseInt(firstNumber)
const secondInt = parseInt(secondNumber)

const theSum = firstInt + secondInt

alert(`The sum of the two numbers you entered (${firstInt},${secondInt}) is: ${theSum}.`)
console.log(theSum);

// Take Home Chalenge

// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

const enterFirstName = prompt("Please enter your first name.")
const enterLastName = prompt("Please enter your last name.")

console.log(enterFirstName);
console.log(enterLastName);

alert(enterLastName);

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

const birthDate = prompt("Please enter your birthday.")
let birthConfirm = confirm(birthDate)
alert(birthDate)
