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

// const multiply = (number) => {
//     let triple = number * 3
//     return `${triple}`
// }
// let number1 = 7
// console.log(multiply(number1))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// input: 2 numbers
// output: 1 number multiplied
// const multiply = (number1, number2) => {
//     let multiplied = number1 * number2
//     return multiplied
// }
// let firstNum = 2
// let secondNum = 5
// console.log(multiply(firstNum, secondNum))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// input: 2 numbers
// output: string "number is evenly divisible by number"
// logic: conditional statement involving the modulus
// const divisibleBy = (number1, number2) => {
//     if (number1 % number2 === 0) {
//         return `${number1} is evenly divisible by ${number2}`
//     } else {
//         return `${number1} is not evenly divisible by ${number2}`
//     }
// }
// let firstNum = 10
// let secondNum = 6
// console.log(divisibleBy(firstNum, secondNum))

// // Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// // input: number (grade)
// // output: string (letter)
// // logic: conditional statement
// const assignGrade = (numberGrade) => {
//     if (numberGrade < 100 && numberGrade >= 90) {
//         return `A`
//     } else if (numberGrade < 90 && numberGrade >= 80) {
//         return `B`
//     } else if (numberGrade < 80 && numberGrade >= 70) {
//         return `C`
//     } else if (numberGrade < 70 && numberGrade >= 60) {
//         return `D`
//     } else if (numberGrade < 60) {
//         return `F`
//     } else {
//         return `Enter a number grade between 0-100`
//     }
// }
// let grade1 = 90
// let grade2 = 85
// let grade3 = 70
// let grade4 = 65
// let grade5 = 0
// let notGrade = "kdjkfjhsdfpowe"
// console.log(assignGrade(grade1))
// console.log(assignGrade(grade2))
// console.log(assignGrade(grade3))
// console.log(assignGrade(grade4))
// console.log(assignGrade(grade5))
// console.log(assignGrade(notGrade))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// input: 2 strings
// output: 1 string (most chars)
// logic: conditional comparison
// const isLonger = (string1, string2) => {
//     if (string1.length < string2.length) {
//         return string2
//     } else {
//         return string1
//     }
// }
// let firstStr = "A Long String"
// let secondStr = "Short"
// console.log(isLonger(firstStr, secondStr))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// input: 2 numbers
// output: 1 number (bigger num)
// logic: conditional comparison
// const greaterNum = (number1, number2) => {
//     if (number1 > number2) {
//         return number1
//     } else {
//         return number2
//     }
// }
// let firstNum = 730
// let secondNum = 238
// console.log(greaterNum(firstNum, secondNum))


// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// input: 1 string
// output: 1 string in UPPER
// const yelling = (string) => {
//     return string.toUpperCase()
// }
// let lowerString = "hello"
// console.log(yelling(lowerString))

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// input : 1 string
// output: 1 string in different language
// logic: conditional comparison 

// const helloWorld = (langCode) => {
//     if (langCode === "es"){
//         return "hola Mundo"  
//     } else if  (langCode === "de"){
//         return "Hallo Welt"
//     } else if (langCode === "ja"){
//         return "こんにちは世界"
//     } else if (langCode === "tr"){
//         return "Selam Dünya"
//     } else {
//         return "Hello World"
//     }
    
// }
// let diffLangs1 = "es"
// let diffLangs2 = "de"
// let diffLangs3 = "ja"
// let diffLangs4 = "tr"
// console.log(helloWorld(diffLangs1));
// console.log(helloWorld(diffLangs2));
// console.log(helloWorld(diffLangs3));
// console.log(helloWorld(diffLangs4));
// console.log(helloWorld());


// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

// input: takes 2 variables. 1st a number. 2nd a string (singular noun)
// output: returns number and string (pluralized noun)
// logic: conditional, built in method
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"

const pluralizer = (number, singularNoun) => {
    if (singularNoun === "sheep") {
        return `${number} ${singularNoun}` 
    } else if (singularNoun === "goose") {
        return `${number} ${singularNoun}`
    } else if (singularNoun === "child") {
        return `${number} ${singularNoun}`
    } else if (singularNoun === "person") {
        return `${number} ${singularNoun}`
    } else if (singularNoun === "species") {
        return `${number} ${singularNoun}`
    } else if (number === 1) {
        return `${number} ${singularNoun}`
    } else if (number > 1) {
        return `${number} ${singularNoun}s`
    }
}
let number1 = 1
let singularNoun1 = "dog"
console.log(pluralizer(number1, singularNoun1))