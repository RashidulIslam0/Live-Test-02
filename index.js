// Md Rashidul Islam

// Live Test-02



// 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330
function circuitPower(voltage, current) {
    return voltage * current;
}

let power = circuitPower(110, 3);
console.log(power); 



// 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    return Math.max(...numbers);
}
console.log(findMaxNumber([1, 2,258,888, 3, 4, 5,58,541,22]));  
console.log(findMaxNumber([]));             




// 3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

const array1 = [ 7, 8,9];
const array2 = [15, 25, 26];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);



// 4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]
function arrayValuesTypes(array) {
    return array.map(item => typeof item);
}
const typesArray = arrayValuesTypes([1, 2, "null", []]);
console.log(typesArray);  
