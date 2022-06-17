/*
P: Write a function that accepts a negative argumennt,
if the number is negative return the negative number
if the number is positive return the number back as negative


Input: Number
Output: Negative Number

Explicit Requirements:
- Return the postive integer as a negative number
- Retturn the negative number as a negative number
- if 0 return -0

Implicit Requirements:

E:

D:

A:

- write the negative funciton
- if the number is 0
  - return -0
- If the number is less than 0
  - return number
- else
 return number negative

C:

*/

function negative(number) {
  return -Math.abs(number);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0