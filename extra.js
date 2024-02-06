// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// input: hodgepodge arrays 
// output: remainders / 3. array of numbers. using % modulo 
// logic: filter out data that are not numbers. using typoOf method

const mixedData = (mixedArray)=> {
    let newData = []
    let arrayLength = mixedArray.length 
    for (i = 0; i<arrayLength; i++) {
        if (typeof mixedArray[i] === "number"){
        let modulo = mixedArray[i] % 3  
        newData.push(modulo)
        }
    } 
    return newData
}
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]
console.log(mixedData(hodgepodge1))
console.log(mixedData(hodgepodge2))

// // 3.  Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
const sumCubed = (numArr) => {
    let finalValue = 0
    let arrLength = numArr.length
    for (let i = 0; i < arrLength; i++) {
        finalValue += numArr[i] ** 3
    }
    return finalValue
}

const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125
console.log(sumCubed(cubeAndSum2))