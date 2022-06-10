/*
P: Write a function that returns true if a number is palindromic
or falseotherwise

Input: Number
Output: Boolean

E:  1 2 1 // true

first I need to declare an empty variable
use the to string method and the split method
then the join method
then I need to iterate through the argument
then compare the variables;


D:

A:

- write the function
- declare numbersString
  - Use the toString().Split().join method
- Use the Number() method;

C:

*/

function isPalindromicNumber(number) {
  let numbersString = number.toString().split('').reverse().join('');
  let reversedNumber = Number(numbersString);

  console.log(number === reversedNumber);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true