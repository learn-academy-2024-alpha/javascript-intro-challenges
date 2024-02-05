// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
 return `Welcome ${name}`
}
console.log(greeting("Shawn"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
 if(number % 2 === 0){
    return  `${number} is even`
 } else { return `${number} is odd`}
}
console.log(oddOrEven(5));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => { 
  return number * 3
}
console.log(triple(2));
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
 return num1 * num2
}
console.log(multiply(3, 3));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
 return num1 % num2 === 0 ? `${num1} is evenly divisible by ${num2}`: `${num1} is not evenly divisible by ${num2}`
}
console.log(divisibleBy(5, 2));
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numscore) => {
  if( numscore === 100){
        return "that is a perfect score"
    }else if(numscore >= 90){
      return "A"
    }else if(numscore >= 80){
      return "B"
    }else if(numscore >= 70){
      return "C"
    } else if(numscore >= 60){
      return "D"
    } else { return "F"}
  }
  console.log(assignGrade(5));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (name1, name2) => {
    if(name1.length > name2.length ){
        return name1
      } else if (name1.length < name2.length){
          return name2
      } else {
        return `${name1} and ${name2} are the same length`
      }
    }
console.log(isLonger("Matt","seth"));
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
    const greaterNum = (num1, num2) => {
      if (num1 > num2){
          return num1
        } else if (num1 < num2){
          return num2
        } else { 
          return`${num1} & ${num2} are the same`
        }
       }
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
  return string.toUpperCase()
}
console.log(yelling("hello"));
// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English. 
const helloWorld = (langCode) => {
  if (langCode === "de" ) {
  			return "Hallo Welt"
  	} else if (langCode === "es"){
  			return "Hola Mundo"
  	} else if (langCode === "no"){
  			return "Hei Verden"	
  	} else if (langCode === "it"){
  			return "Ciao Mondo"
  	} else if (langCode === "tr"){
  		return "Selam Dünya"
  	} else if (langCode === "fr"){
  			return "Bonjour le monde"
  	} else { return "Hello World"}
  }
  console.log(helloWorld(""));


// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
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

const pluralizer = (num, word,) => {
  const plural = num + word + "'s"
  const singular = num + word
    if (num === 1 || num === -1){
        return  singular
      } else if(word === "person"){
          return `${num} people`
      }else if(word === "goose"){
          return `${num} geese`
      } else if (word === "sheep"){
         return singular
      } else if (word === "child"){
        return `${num} children`
      } else if(num <= 0 || num >= 2){
          return plural
      } else {"invalid input"}
    }   
    console.log(pluralizer(2, "sheep"));