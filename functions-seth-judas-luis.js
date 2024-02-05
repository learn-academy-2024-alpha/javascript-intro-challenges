//Write a function named marco that returns "polo".
// const marco =() =>{
//     return "polo" 
// }
//      console.log(marco())
//Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting =(name) =>{
//     return `welcome, ${name}`
// }

//     console.log(greeting("luis"))
//Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven =(number) =>{
//     if(number % 2 ===0){
//         return `the number ${number} is even`
// }  else{
//     return `the number ${number} is odd`
// }  
// }
//     console.log(oddOrEven(7))

//Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) =>{
//     return `${number} * 3 is ${number * 3}:`
// } 
//     console.log(triple(5))

//Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (number1,number2) =>{
//     return `${number1} * ${number2} = ${number1 * number2}`
// } 
//     console.log(multiply(4,7));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//     if (num1 % num2 === 0) {
//     return `${num1} and ${num2} is evenly divisible`
// } else {
//     return `${num1} and ${num2} are not evenly divisible`
//     }
// }
// console.log(divisibleBy(10, 9)); 

//Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (number) => {
//     if (number >= 90) {
//         return "You have an A"
//     } else if (number >= 80) {
//         return "you have a B"
//     } else if (number >= 70) {
//         return "you have a C"
//     } else if (number >= 60) {
//         return " you are close to failing"
//     } else {
//         return "you are failing my guy"
//     }
// }
// console.log(assignGrade(88));

//Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (fruit1, fruit2) => {
//     if(fruit1.length > fruit2.length) {
//         return `${fruit1} has more characters`
//     } else if (fruit1.length < fruit2.length) {
//         return `${fruit2} has more characters`
//     } else {
//         return `${fruit1} and ${fruit2} have the same characters`
//     }
// }
// console.log(isLonger("orange", "orange"));

//Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//     if (num1 > num2) {
//         return `${num1} is greater than ${num2}`
//     } else if (num1 < num2) {
//         return `${num1} is less than ${num2}`
//     } else {
//         return "both number are the same"
//     }
// }
// console.log(greaterNum(14, 14.1));

//Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (str) => {
        return str.toUpperCase()
}
console.log(yelling("hello"));
