const headerElement = document.getElementById("header-ele")
const container = document.getElementById("root")

// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

let firstNum = prompt("Enter a number.")
let secondNum = prompt("Enter another number.")

if (isNaN(firstNum)){
    alert(`You did not enter a number. "${firstNum}" is not an integer.`)
} else if (isNaN(secondNum)){
    alert(`You did not enter a number. "${secondNum} is not an integer."`)
} else {
    window.reload()
}

let firstInt = parseInt(firstNum)
let secondInt = parseInt(secondNum)

if (firstInt > secondInt){
    alert(`The first number: ${firstNum} is larger than the second number: ${secondNum}`)
} else if (secondInt > firstInt) {
    alert(`The second number: ${secondNum} is larger than the first number: ${firstNum}.`)
} else if (firstInt === secondInt) {
    alert(`Both numbers are equal`)
} else {
    alert(`You did not enter any to compare.`)
}

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

