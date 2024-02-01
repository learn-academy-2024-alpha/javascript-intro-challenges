// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 /3 > 67 /2); //false
// Does 5 evaluate to the same as "5"?
console.log(5 == "5"); //true
// Does 5 strictly equal "5"?
console.log(5 === "5") //false
// Does !3 strictly equal 3?
console.log(!3 === 3) //false
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7); //true
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10);//true
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN")) //true
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn")); //false
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l"); //false
console.log("LEARN"[0] === "L"); //true
// Modify the code from the previous question to return true.