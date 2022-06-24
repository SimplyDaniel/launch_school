/*
P: Write a unction that takes a string as an argument, & returns a list
of substrings of the atring argument.

Input: String

Output: Substrings of the string argument

Explicit Requirements:
- Each substring should start with the first letter of the word;
- The list should be from shortest to longest

Implicit Requirements:

Questions:

- What should I return if the argument is an expty string?

E:

D:

A:
- write the leading function
- declare an epty array variable
- use a for loop
- at each iteration push the current

C:

*/

function leadingSubstrings(string) {
  let substringArray = [];

  for (let i = 1; i <= string.length; i++) {
    substringArray.push(string.slice(0, i));
  }
  return substringArray;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]