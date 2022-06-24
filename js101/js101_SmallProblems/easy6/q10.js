/*
P: Write a function that accepts a string argument, returns that argument
with the words reversed..

Input: String
Output: Reversed String

Explicit Requirements:

Implicit Requirements:

E:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

D:

A:
- Write the reverse string function
- declare a string array variable
- return the string reversed


C:

*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
