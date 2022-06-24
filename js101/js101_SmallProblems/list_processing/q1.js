/*
P: write a function that takes an a positive number as an argument
the function should return the sum of the digits. We cnanopt do this using loops
do it using method calls instead

Input: Number
Output: That numbers summed

Explicit Requirements:
- Do this excersice with method calls only

Implicit Requirements:

E:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

D:

A:

- write the dum function
- convert the number argument to an array
- use the reduce method

C:

*/

function sum(number) {
  let numberArray = Array.from(String(number), Number);
  return numberArray.reduce((num1, num2) =>
    num1 + num2);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45