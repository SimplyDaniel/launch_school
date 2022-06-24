/*
P: Write a function that returns all substrings of a given string
argument. Starting from the 0th index, once all the subStr are done
move to index 1 and so on...

Input: String
Output: Multiple substrings from the string

Explicit Requirements:

- Use the leadingSubstrings function from q4
- return all substrings fro  0th index and then 1st and so on

Implicit Requirements:

E:

substrings('abcde');

returns //
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

D:

A:

- write the substring function
- in the leading substring function
  - Declare a count variable
  -

C:

*/

function substrings(string) {
  return leadingSubstrings(string);
}

function leadingSubstrings(string) {
  let substringArray = [];

  for (let i = 0; i <= string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      substringArray.push(string.slice(i, j));
    }
  }
  return substringArray;
}

console.log(substrings('abcde'));

