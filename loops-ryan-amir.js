// Challenges
// Create a for loop that logs each number from 1 - 20.
// let favNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(favNum.length)
// for (let i=0; i<favNum.length; i++){
//     console.log("index:", i, "value", favNum[i])
// }
// // Create a for loop that logs every other number from 1 - 20.
// let secNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(secNum.length)
// for(let i=0; i<secNum.length; i+=2){
//     console.log("index:", i, "value", secNum[i])
// }
// // Create a for loop that logs the result of each number from 1 - 20 tripled.
// let thirdNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for(let i=0; i<thirdNum.length; i++){
//     let result = thirdNum[i] * 3
//     console.log(`tripled is: ${result}`)
// }
// // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// // Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// let fourNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for(let i=0; i<fourNum.length; i++){
//     if(fourNum[i] % 2 !== 0) {
//         console.log("odd") 
//     }else{ 
//     console.log(`${fourNum[i]}`)
//     }
// }
// // Consider this variable:

// const nums = [3, 57, -9, 20, 67]
// // Create the code that will log the largest number from the array.
// let largeNum = 0
// for(let i=0; i<nums.length; i++){
//     if (nums[i] > largeNum){
//         largeNum = nums[i];
//     }
// } 
// console.log(largeNum)
// // Create the code that will log the smallest number from the array.
// let smallNum = 0
// for(let i=0; i<nums.length; i++){
//     if (nums[i] < smallNum){
//         smallNum = nums[i]
//     }
// }
// console.log(smallNum)
// // Create the code that will log the remainder of each number when divided by 2.
// // Expected output: 1, 1, -1, 0, 1
// for(let i=0; i<nums.length; i++){
//     const remainder = nums[i] % 2;
//     console.log(remainder)
// } 
// // Consider this variable:

const myString = "learn student"
// // Create the code that will log the number of times the letter "e" occurs in the string.
// var letter = 0
// var stringArray = myString.split("")
// for(let i=0; i<myString.length; i++){
//     if (myString[i] === "e"){
//         letter++
//     }
// }
// console.log(letter)

// Create the code that will log every other character in the string.

for (let i=0; i<12; i += 2)

// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
