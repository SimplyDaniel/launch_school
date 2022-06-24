/*
P: Write a function that takes an array of numbers
and returns the sun of the sums of each leding sub sequences.

Input: An array of numbers
Output: a number with the total

Explicit Requirements:
- Return all the subsequent numbers of the array and add them together

Implicit Requirements:

E:

sumOfSums([3, 5, 2]);
        (3) + (3 + 5) + (3 + 5 + 2) --> 21
Index: (0)  + (0 + 1) + (0 + 1 + 2)

D: Arrays

A:

- Write the sumOfSums function
- declare an empty array variable
- iterate through the array argument usuing a for loop
  - start the index at 1
  - push the sliced array from 0th idx to starting index in for loop
- flatten the array
- reduce the array
- return the array

C:

*/

function sumOfSums(array) {
  let total = [];

  for (let index = 1; index <= array.length; index += 1) {
    total.push(array.slice(0, index));
  }
  return total.flat().reduce((num1, num2) => num1 + num2);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35