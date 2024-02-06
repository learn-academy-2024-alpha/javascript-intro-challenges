// Write a function named marco that returns "polo".
// const marco = () =>  {
//     return "polo"
// }

// console.log (marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}!`;
// }

// console.log(greeting("Amir"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if (number % 2 === 0) {
//         return `${number} is Even`
//     } else {
//         return `${number} is Odd`
//     }
    
// };

// console.log(oddOrEven(4));


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (number) => {
//     return number * 3
// }

// console.log(triple(4))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(2, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = (num1, num2) => {
//     if (num1 % num2 === 0){
//         return `${num1} is evenly divisible ${num2}`
//     }else{
// return `${num1} is not evenly divisible by ${num2}`
//     }
// };   
//   console.log(divisibleBy(10, 3))      
    


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (numScore) => {
//     if(numScore >= 90){
//         return 'A'
//     }else if (numScore >= 80){
//         return 'B'
//     }else if (numScore >= 70){
//         return 'C'
//     }else if (numScore >= 60){
//         return 'you need jesus'
//     }else{
//         return 'why even come'
//     }
//     };
// console.log(assignGrade(67))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (str1, str2) => {
    if (str1.length > str2.length){
        return `${str1} is greater`
    }else{
        return `${str2} is greater`
    }
}
console.log(isLonger("trauma", "goodday"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.


const greaterNum = (num1, num2) => {
    if (num1 > num2){
        return `${num1} is greater`
    }else{
        return `${num2} is way greater`
    }
    }
    console.log(greaterNum(50, 20000))


// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (str) =>{
    return (str.toUpperCase())
}
console.log(yelling('oh happy days!!!'))