// // <!-- 💻 Challenges

// // Create a for loop that logs each number from 1 - 20.
// // for(let i=1; i<=20; i++) {
// //   console.log(i);
// // }
// // Create a for loop that logs every other number from 1 - 20.
// for(let i=1; i<21; i +=2){
//  console.log(i);
// }
// // Create a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i=1; i<21; i++) {
//   console.log(i*3);
// }
// // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// // Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// for(let i=0; i<=20; i++) {
//   if(i % 2 === 0){
//   console.log(i);
// } else {
//   console.log("odd");
// }
// }

// Consider this variable:

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
  
  // let max = 0
  // for (let i = 0; i < nums.length; i++){
  //   if (nums[i] > max){
  //       max = nums[i];
  //   }
  // }
  // console.log(max);


// Create the code that will log the smallest number from the array.
// let min = 0
// for (let i = 0; i < nums.length; i++){
//   if (nums[i] < min){
//       min = nums[i];
//   }
// }
// console.log(min);

// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] % 2);
// }

// Consider this variable:
const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.

// let stringE = 0
// let stringArray = myString.split("")
// for (let i = 0; i < stringArray.length; i++){
//   if (stringArray[i] === "e"){
//       stringE++
//   }
// }
// console.log(stringE);





// Create the code that will log every other character in the string.
let stringArr = myString.split("");
for (let i = 0; i < stringArr.length; i+=2) {
    console.log("this is every other character: " + stringArr[i]);
}


// 🏔 Stretch Goals

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc -->