/*
P: Write a function that takes a string argument and returns
a list of all the substrings and should begind with the first letter of that
word.

Input: String
Output: Substring

Explicit Requirements:
- The substrings should begin with the first letter of the word

Implicit Requirements:

E:

leadingSubstrings('abc');      // ["a", "ab", "abc"]

D: Arrays and strings

A:

- Write the leading substrings function
- create an eprty array varibale
- iterate through the string with a for loop
  - start the index at 1
  - at each iteration push the current iteration by slicing the string
   at the the 0th index and the index
- Return the empty array variable

C:

*/

function leadingSubstrings(string) {
  let substringArray = [];

  for (let index = 1; index <= string.length; index += 1) {
    substringArray.push(string.slice(0, index));
  }

  return substringArray;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]