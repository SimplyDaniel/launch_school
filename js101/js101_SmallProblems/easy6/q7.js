/*
P: Write a function that returns an array with all the numbers counting
up from the argument. The function will accept a postive number.

Input: a positive number
Output: an array with all numbers counting up to the input number.

Explicit Requirements:
- Log all numbers that are leading to the input number

Implicit Requirements:


E:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

D: Arrays

A:

-Write the sequence function
- Decalre an empty array variable
- Use a for loop or a while loop
- While the idex is less than inout number
  - Push the corrent number to the array
- Return array

C:

*/

function sequence(number) {
  let leadingNums = [];

  for (let index = 1; index <= number; index++) {
    const element = index;
    leadingNums.push(element);
  }
  return leadingNums;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));   // [1, 2, 3]
console.log(sequence(1));  // [1]