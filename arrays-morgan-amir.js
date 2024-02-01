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
