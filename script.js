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

// 2. Filter the array to remove entries with an age greater than 50.
const filteredData = data.filter(person => parseInt(person.age) <= 50);
console.log("filtered data", filteredData);

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.
const mappedData = data.map(person => ({...person,
    job: person.occupation,
    age: parseInt(person.age) + 1
}))
console.log("Mapped data:", mappedData);

// 4-1. Use the reduce method to calculate the sum of the ages.
const sumOfAges = data.reduce((acc, person) => acc + parseInt(person.age), 0);
console.log(" Sum of ages:", sumOfAges);

// 4-2. Then use the result to calculate the average age.
const averageAge = sumOfAges / data.length;
console.log("Average age:", averageAge);

/**
 * 
 * Part 3 - Thinking Critically
 * 
 */

const person = { name: "Malik", occupation: "Software engineer" };

function incrementAge(obj) {
    if (!obj.age) {
        obj.age = 26;
    }
    obj.age++;
    obj_updated_at = new Date();
}

function incrementAgeCopy(obj) {
    const copy = { ...obj };
    if (!copy.age) {
        copy.age = 26;
    }
    copy.age++;
    copy.updated_at = new Date();
    return copy;
}

// increment age of the original object
incrementAge(person);
console.log(person);

// increment age of a copy of the object
const personCopy = incrementAgeCopy(person);
console.log(personCopy);


/**
 * 
 * Part 4 - Thinking Practically
 * 
 */

// R-LAB-308-4-1 csvString data

const csvString =
  `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

const dataArray = csvString.split('\n').slice(1).map(row => {
    const fields = row.split(',');
    return {
        id: fields[0],
        name: fields[1],
        occupation: fields[2],
        age: parseInt(fields[3])
    };
});
console.log("dataArray:", dataArray)


const avgAge = dataArray.reduce((sum, person) => sum + person.age, 0) / dataArray.length;
console.log("Average age:", avgAge);


/**
 * 
 * Part 5 - Thinking Back
 * 
 */

// ALAB-308-3-1

//  // Part 2: Prime Time
  
//   let n = 21;
//   let nextPrime;
//   let i = n + 1;
  
  
//   outerLoop: while (!nextPrime) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
        
//         i++;
//         continue outerLoop;
//       }
//     }
//     nextPrime = i;
//   }
  
//   console.log(nextPrime);

function findNextPrime(n) {
    let i = n + 1;

    while (true) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return i;
        }

        i++
    }
}

const nextPrime = findNextPrime(21);
console.log(nextPrime);