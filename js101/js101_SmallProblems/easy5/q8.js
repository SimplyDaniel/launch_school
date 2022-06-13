/*
P: Write a function that accepts an integer as an srgument and
returns an array of that integer.


Input: Number
Output: Array of the number argument

E:

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

D: Array and variables

A:
- Write the digitList function
- comnvert the number to a string
- split the string
- iterate through the array
- multiply each index by 1 to coerce into number
- push the index into final array
- return the array

C:

*/

function digitList(number) {
  let numberString = number.toString().split('');
  let numberArray = numberString.map(x => x * 1);

  // solution with a  for loop
  // for (let index = 0; index < numberString.length; index++) {
  //   const element = numberString[index] * 1;
  //   numberArray.push(element);
  // }
  return numberArray;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

