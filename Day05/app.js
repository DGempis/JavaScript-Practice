const headerOne = document.getElementById("header-ele")
const container = document.getElementById("root")

// -----------------------------------Daily Challenge-------------------------------------


// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function

function newNumber(number){
    if (number % 2 == 0){
        alert(`The number you entered: "${number}", is even.`)
    } else {
        alert(`The number you entered: "${number}", is odd.`)
    }
}

newNumber(20);
newNumber(21);  


// -----------------------------------Take Home Challenge-------------------------------------

// Write a function that accepts a password (string)
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected

function newPassword(password){
    if (password.length >= 5 && password.length <= 19){
        console.log("Correct password length. 6-20 characters long.")
        console.log(`The password you entered: ${password}`);
    } else {
        console.log("Incorrect password length. Must be between 6-20 characters long.")
        console.log(`The password you entered: ${password}`);
    }
};

// newPassword("Danzel");
newPassword("Yes");