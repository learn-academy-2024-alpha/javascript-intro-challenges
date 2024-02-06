// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
let firstDivision = 34 / 3
let secondDivision = 67 / 2

if (firstDivision > secondDivision) {
    console.log("true")
} else {
    console.log("false")
}
// Does 5 evaluate to the same as "5"?
if (5 == "5") {
    console.log("true")
} else {
    console.log("false")
}
// Does 5 strictly equal "5"?
if (5 === "5") {
    console.log("true")
} else {
    console.log("false")
}
// Does !3 strictly equal 3?
if (!3 === "3") {
    console.log("true")
} else {
    console.log("false")
}
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
let learn = "LEARN"
let learnLength = learn.length
let student = "Student"
let studentLength = student.length

if (learnLength === 5 && studentLength === 7) {
    console.log("true")
} else {
    console.log("false")
}
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
if (learnLength === 5 || studentLength === 10) {
    console.log("true")
} else {
    console.log("false")
}
// Does "LEARN" contain the subset "RN"?
if (learn.includes("RN")) {
    console.log("true")
} else {
    console.log("false")
}
// Does "LEARN" contain the subset "rn"?
if (learn.includes("rn")) {
    console.log("true")
} else {
    console.log("false")
}
// Does "LEARN"[0] strictly equal "l"?
if(learn[0] === "l") {
    console.log("true")
} else {
    console.log("false")
}
// Modify the code from the previous question to return true.
if(learn[0] === "L") {
    console.log("true")
} else {
    console.log("false")
}




// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.




// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let gradePercentage = "90%"
if (gradePercentage === "100%") {
    console.log("perfect score")
} else if (gradePercentage === "0") {
    console.log("no grade available")
} else {
    console.log("average score")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let variableType = false
if (typeof variableType === "boolean") {
    console.log("boolean")
} else if (typeof variableType === "number") {
    console.log("number")
} else if (typeof variableType === "string") {
    console.log("string")
} else {
    console.log("some other type")
}
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
let psswrd = "1234567"
let psswrdLength = psswrd.length
if (psswrdLength >= 12 && psswrd.includes("!")) {
    console.log("That is a mighty strong password!")
} else if (psswrdLength >= 8 || psswrd.includes("!")) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}
