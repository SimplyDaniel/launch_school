/* eslint-disable max-len */
/*
P: Write a functiont that returns all substrings of a string.


Input:
Output:

Explicit Requirements:

- You should use the leadingSubstrings function in the previous exercise
- The substrings have to start at the 0th index return all substrings
  - then move onto the 1st index and so forth...
-


Implicit Requirements:

E:

substrings('abcde');

returns //
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

D: Arrays and Strings

A:

My Logic:

- Write the substrings function
- declare an empty array variable
- iterate though the string and start at the 1st index
- declare a variable
- after each iterateion slice the array

LS Logic:

- write the substrings function
- declare an empty array variable
- iterate through the string with a for loop
  - declare a variable and initialize it to string.substring(startIndex)
  - reasign substrings = substring.concat(leadingSubstrings(substring)) // which concatenates the leading substrings from the helper function
- Return substrings;
C:

*/

function substrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    let substring = string.substring(index);
    console.log(`At iteration ${index} the 'substrings' variable value is ${substrings}`);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 1; index <= string.length; index += 1) {
    substrings.push(string.slice(0, index));
  }

  return substrings;
}



console.log(substrings('abcde'));