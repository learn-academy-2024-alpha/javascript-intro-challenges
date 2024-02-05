// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
// input:
// output: "polo"

const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// input: name "string"
// output: greeting "string"

const greeting = (name1) => {
    return `Welcome ${name1}`
}
let person = "Morgan"
console.log(greeting(person))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// input: number 
// output: string "odd" or "even"
// logic in a conditional statment 

// const oddOrEven = (number) => {
//     if (number % 2 === 0){
//         return "even"
//     } else {
//         return "odd"
//     }
// } 
// let number1 = 1
// let number2 = 2
// let number3 = 3
// let number4 = 4
// let number5 = 5

// console.log(oddOrEven(number1))
// console.log(oddOrEven(number2))
// console.log(oddOrEven(number3))
// console.log(oddOrEven(number4))
// console.log(oddOrEven(number5))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const multiply = (number) => {
    let triple = number * 3
    return `${triple}`
}
let number1 = 7
console.log(multiply(number1))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".