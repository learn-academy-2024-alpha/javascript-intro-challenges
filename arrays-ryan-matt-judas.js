// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
console.log(groceryList.concat("granola"))
// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
// Write the code that will add "beans" to the "chips" and "dip" array.
let groceryListOne = groceryList.slice(0, 2) 
console.log(groceryListOne.push("beans")) 
console.log(groceryListOne)
// Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers[6] = 12
console.log(numbers)
// Write the code that will remove the first number from the array.
console.log(numbers.shift());
console.log(numbers);
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
 const numOne = [0]
 console.log(numOne.concat(numbers));
console.log(numbers);
// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2));
// Write the code that returns the number at the third index.
console.log(numSet[3])
// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""));
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// console.log(characters.reverse());
let charsReversed = characters.reverse();
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join("*"))
// // Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""))
// // Create two arrays consisting of three first names of your cohort members in each array.
let group1 = ["judas", "ryan", "matt"]
let group2 = ["luis", "morgan", "seth"]

// console.log(group1, group2)
// // Write the code that sorts the names in alphabetical order.
// console.log( group1.sort(), group2.sort())
// Write the code that sorts the names in reverse alphabetical order.
 group1.sort()
 group1.reverse()
 group2.sort()
 group2.reverse()
 console.log(group1, group2)
 //group2.sort(((a, b) => b - a)))

console.log(group1, group2)
// Write the code that sorts the names in alphabetical order.
console.log(group1.sort(), group2.sort())
// Write the code that sorts the names in reverse alphabetical order.
console.log(group1.sort().reverse())
console.log(group2.sort().reverse())

// Write the code that sorts all the names in alphabetical order in a single array.
let sortedGroup1 = group1.sort()
let sortedGroup2 = group2.sort()
let sortedCombinedArray = sortedGroup1.concat(sortedGroup2).sort()
console.log(sortedCombinedArray)
// Consider the variables: 

//var numbers = [42, 221, 71, 7, 18, 87]
//var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
// Write the code that adds the values from odd indexes into the oddIndexes array.