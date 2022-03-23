/* eslint-disable max-len */
/*
P: Given a string that consists of some words and an assortment of non-alphabetic characters,
write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Input: Sting with chracters
Output: string with no char

Rules:
- Is the chars are consecutive return only one space
- Return only string with characters
E:

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("$$$ Hello!!!!! Daniel!!!!!! $$$");    // " Hello Daniel  "

D: Array and Strings

A:
- Write the cleanup Function
- Iterate through

C:
*/

function cleanUp(string) {
  let cleanText = '';

  for (let index = 0; index < string.length; index += 1) {
    if (isLowerCase(string[index]) || isUpperCase(string[index])) {
      cleanText += string[index];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));