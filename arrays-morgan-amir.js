 var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList.push("soda"))


// Write the code that will add "soda" to the end of the original array.



// Write the code that will add "granola" to the end of the array without altering the original array.

var foodList = groceryList 
console.log(foodList.push("granola"))

// Write the code that will return a subset of the array containing only "chips" and "dip".

var getChips = groceryList.slice(0, 2)

// Write the code that will add "beans" to the "chips" and "dip" array.

console.log(getChips.push("beans"))
console.log(getChips)
////////////////////////////////////////////////////////////////////////////


var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
let alteredNumArr = [0]
alteredNumArr = alteredNumArr.concat(numbers)
console.log(`numbers array: ${numbers}`)
console.log(`altered numbers array: ${alteredNumArr}`)

/////////////////////////////////////////////////////////////////////
var numSet = [2, 13, 6, 8, 4, 2]


// Write the code that finds the index of the first appearance of the number 2.

console.log(numSet.indexOf(2))


// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2))



// Write the code that returns the number at the third index.

console.log(numSet[2])