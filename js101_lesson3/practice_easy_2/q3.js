// Question 3
// Given a number and an array, determine whether
// the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// We will use the .includes method
// to detrmine if numbers has a number
// assigned to number1 or number 2