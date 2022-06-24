/*
P: write a function that list all the palindromic substrings of a string.


Input: String

Output: Substrings of palindromes

Explicit Requirements:

- Substrings have to be sprted by thier order of apperence
- duplicate substrings should be included multiple times

Implicit Requirements:

How many actions does this propblem ask me to perform?
- Find Palindromes
- Use the substrings function
- write the palindromes function

E:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

D:Arrays and Strings

A:
- Write the palindromes helper function
  - retunr the string === string.split().reverse().join();
- write the palindromes function
  - declare an empty array varibale
  - Iterate through the string
  - if the word is a pailindrome
    - Push that word into the empty array
- Return empty array variable
-improt the sub string fucntion from q6

C:

*/

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function substrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    let substring = string.substring(index);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substringArray = [];

  for (let index = 1; index <= string.length; index += 1) {
    substringArray.push(string.slice(0, index));
  }

  return substringArray;
}

console.log(palindromes('madam'));      // [ "madam", "ada" ]
