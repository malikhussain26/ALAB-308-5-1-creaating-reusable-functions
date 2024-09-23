console.log('ALAB')

// return the sum of numbers in an array using reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("sum of the array:", sum);

// retun the average of numbers in an array

const average = sum / numbers.length;

console.log("Average of the array:", average);