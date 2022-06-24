/*
P: Write a function that accepts a string argument, returns that argument
with the words reversed..

Input: String
Output: Reversed String

Explicit Requirements:

Implicit Requirements:

E:

reverseWords('Professional'));             // "lanoisseforP"
reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
reverseWords('Launch School'));            // "hcnuaL loohcS"

D:

A:
- Write the reverse string function
- declare a string array variable
- return the string reversed


C:

*/

function reverseWords(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"