/* eslint-disable max-len */

/*
P: A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103,
and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two,
unless the argument is a double number; otherwise, return the double number as-is.

Input: Number
Output: Number doubled if number not the same

E: 55 ===  double number;
13 === No so we would double it, so it should return 26;

D: Numbers

A: 1. Create twice function
2. Create numbers variable;
3. iterate through number argument
4. if the firct index = second index return number
5. else double it.

C:
*/

function twice(number) {
  let doubleNum = 0;

  for (let i = 0; i < number; i += 1) {
    if (i === number[i]) {
      doubleNum += number[i];
    }
    console.log(doubleNum);
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676