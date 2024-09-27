console.log('ALAB')

// return the sum of numbers in an array using reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("sum of the array:", sum);

// return the average of numbers in an array
const average = sum / numbers.length;

console.log("Average of the array:", average);

// make an array of strings and return the longest string
const fruits = ["apple", "orange", "plum", "banana", "jackfruit", "elderberry"];

const longestString = fruits.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
}, "");

console.log("Longest String is:", longestString);


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function filterStringsByLength(strings, minLength) {
    return strings.filter(string => string.length >= minLength);
}

const phrase = "I'm enjoying the Per Scholas Software Engineering program";
const words = phrase.split(" ");
const filteredWords = filterStringsByLength(words, 8);
console.log(filteredWords);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const n = 21;

function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1);
        console.log(n);
    }
}

printNumbers(n); 

/**
 * 
 * Part 2 - Thinking Methodically
 * 
 */

const data = [
    {id: "42", name: "Bruce", occupation: "Knight", age: "41"},
    {id: "48", name: "Barry", occupation: "Runner", age: "25"},
    {id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},
    {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},
    {id: "7", name: "Bilbo", occupation: "None", age: "111"}
];

// 1. Sort the array by age
const sortedData = data.sort((a, b) => a.age - b.age);
console.log("Sorted data:", sortedData);
