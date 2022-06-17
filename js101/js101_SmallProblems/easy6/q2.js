/*
P: Write a function that takes a string argument doubles each
character/index and retiurns the result in a new string. The function
should not double the vowel, a, e, i ,o ,u, digits, punctuation, or whitespace.

Input: String

Output: A strinbg that doubled without the whitespace and vowels

E:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
Hello-World!
HHellllo-Wworrlldd!
D: String and maybe arrays

A:

- Write the doubleConst function
- declare a result variable
- iterate through the atring argument
  - test the string if includes non alphabeic case, continue
  - else double the index
- return result variable

C:

*/

function doubleConsonants(string) {
  let finalResult = [];

  for (let index = 0; index < string.length; index++) {
    if (!/[b-df-hj-np-tv-z]/i.test(string[index])) {
      finalResult.push(string[index]);
      continue;
    } else {
      finalResult.push(string[index],string[index]);
    }
  }
  console.log(finalResult.join(''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""