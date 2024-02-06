// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
    console.log(34 / 3 > 67 / 2);
// Does 5 evaluate to the same as "5"?
    console.log(5 == "5");
// Does 5 strictly equal "5"?
    console.log(5 === "5");
// Does !3 strictly equal 3?
    console.log(!3 === 3);
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
    console.log("LEARN".length === 5 && "student".length === 7);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
    console.log("LEARN".length === 5 || "student".length === 10);
// Does "LEARN" contain the subset "RN"?
    console.log("LEARN".includes("RN"));
// Does "LEARN" contain the subset "rn"?
    console.log("LEARN".includes("rn"));
// Does "LEARN"[0] strictly equal "l"?
    console.log("LEARN"[0] === "l");
// Modify the code from the previous question to return true.
    console.log("LEARN"[0] === "L")
// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
    const item = 100
        if (item <= 100){
            console.log("in budget")
        }
        

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
        let hungry = true
            hungry = false 

        if (hungry === true){
            console.log("eat food")
        } else { 
            console.log("keep coding")
        }
        
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
        let trafficLight = "green"
            trafficLight = "yellow"
        if (trafficLight === "green") {
            console.log("go");
        } else if (trafficLight === "yellow"){
            console.log("slow down");
        } else if (trafficLight === "red"){
        console.log("stop");
        }

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
        const firstNum = 30
        const secondNum = 78
        if (firstNum < secondNum){
            console.log(secondNum)
        } else if (firstNum === secondNum){
            console.log("numbers are the same")
        } 
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
        let thirdNum = 1
        if (thirdNum === 0){
            console.log("zero")
        } else if (thirdNum % 2 === 0){
            console.log("even")
        } else {
            console.log ("odd")
        }
    // let thirdNum = 10
    // if ( thirdNum === 0){
    //     console.log("zero");
    // } else if (thirdNum % 2 === 0) {
    //     console.log("even");
    // } else {
    //     console.log("odd");
    // }
    

// 🏔 Stretch Goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let myGrade = 100
if (myGrade === 100){
    console.log("Perfect score");
} else if ( myGrade === 0) {
    console.log("no grade available");
}


// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.