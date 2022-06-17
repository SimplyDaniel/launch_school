/*
P: Write a function that takes a number as an argument and
reverse that number.

Input: Number
Output: That same number reversed

Explicit Requirements:
- Number has to be reversed
- Has to return a number
- Leading 0000s get dropped

Implicit Requirements:
- what should I return is an argument is a string?

E:

reverseNumber(12000);    // 21 - Note that leading 0s in the result get dropped!
reverseNumber(12345);    // 54321

D: Arrays or String to reverse this number

A:

- Write the reverseNumber function
- declare a stringNumber variable
- declare final result variable
  - Split the string into an array
  - iterate through the array
  - if the index  = 0 skip
  - else push the number into variable
- return variable reversed

C:

*/

function reverseNumber(number) {
  let stringNum = String(number).split('');
  let resultArray = [];

  for (let index = 0; index < stringNum.length; index++) {
    let element = stringNum[index];

    if (stringNum[index] === '0') continue;

    resultArray.push(element);
  }
  return Number(resultArray.reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1
console.log(reverseNumber(123000));    // 321