/*
P: write a function that returns all palindromic substring of
the given string argument. The palindromic strings are case
senstive

Input: String
Output: Suibstrings that are palindromic

Explicit Requirements:
- Return all palidromic substrings with a string
- use the substrings functrion from previosu excercise

Implicit Requirements:

E:

D:

A:
- import the substrings function
- write the palindrome function
- create an empty varible
- call the leading substrings variable
  - 

C:

*/

function substrings(string) {
  let substringArray = [];

  for (let i = 0; i <= string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      substringArray.push(string.slice(i, j));
    }
  }
  return substringArray;
}

console.log(substrings('hello'));