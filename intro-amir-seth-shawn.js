// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log the output of 34 added to 71.
addition = 34 + 71
console.log(addition)

// Write the code that will log the output of 67 subtracted from 123.
subtraction = 123 - 67
console.log(subtraction)

// Write the code that will log the output of 56 multiplied by 23.
multiplication = 56 * 23
console.log(multiplication)

// Write the code that will log the output of 45 divided by 5.
division = 45 / 5
console.log(division)

// Write the code that will log the output of 5 to the power of 7.
powerOf = 5 ** 7
console.log(powerOf)

// Write the code that will log the whole number remainder of 33 divided by 6.
modulo = 33 % 6
console.log(modulo)

// Write the code that will log the length of a string containing your name.

shawn = "thisIsACoolName"
lengthOf = shawn.length
console.log(lengthOf)

// Write the code that will log whether your string includes the letter "e"?
shawn = "thisIsACoolName"
containsE = shawn.includes("e")

if (containsE){
    console.log("There is an E")
} else {
    console.log("No E here")
}
    
// Write the code that will log the character at the first index of the string.
shawn = "Test!"
firstChar = shawn[0]
console.log(firstChar)

// Write the code that will log the string in all uppercase letters.

shawn = "suchWow"
toUpper = shawn.toUpperCase()

console.log(toUpper)

// Consider the variables:
const theQuestion = "life, the universe, and everything"
const theAnswer = 42

// Write the code that will log theAnswer divided by 2.
console.log(theAnswer / 2)

// Write the code that will log the whole number remainder of theAnswer when divided by 3.
console.log(theAnswer % 3)

// Write the code that will log the length of theQuestion.
console.log(theQuestion.length)

// Write the code that will log the length of theQuestion divided by 2.
dividedBy2 = theQuestion.length / 2
console.log(dividedBy2)

// Write the code that will log the length of theQuestion added to theAnswer.
addItUp = theQuestion.length + theAnswer
console.log(addItUp)

// Write the code that will log the index of the character "f" in the theQuestion.
// const theQuestion = "life, the universe, and everything"
fIndex = theQuestion.indexOf("f")
console.log("F is found at the index of " + fIndex)

// Write the code that will log the index of the second comma in the theQuestion.
commaOne = theQuestion.indexOf(",")
commaTwo = theQuestion.indexOf(",", commaOne + 1)
console.log(commaTwo)

// Write the code that will log the concatenation of the two variables.
concat = theQuestion +" "+ theAnswer
console.log(concat)

// Write the code that will log the character "l" from theQuestion.
logAnL = theQuestion.charAt(0)
console.log(logAnL)


// Write the code that will extract "the universe" from theQuestion.
start = theQuestion.indexOf("the universe")
end = start + "the universe".length

theUni = theQuestion.substring(start, end)
console.log(theUni)

// Write the code that will extract "everything" from theQuestion.
start = theQuestion.indexOf("everything")
end = start + "everything".length

everything = theQuestion.substring(start, end)
console.log(everything)

// Write the code that will log the last character of theQuestion without manually counting the number of characters.
lastChar = theQuestion.charAt(theQuestion.length -1)
console.log(lastChar)