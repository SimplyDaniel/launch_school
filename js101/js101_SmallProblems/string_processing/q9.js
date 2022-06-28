/*
P: create a function that takes two arguments, the first being a word
the second a string of text. The function needs to return an integer
representing the amount of times the word appears in the string of text.


Input: string
Output: a number

Explicit Requirements: 
- The words will always be split up by a space ' ';
- the words are case insensitive

Implicit Requirements:

E:

let test = 'helo daniel, how are you today daniel? Thats great daniel!
searchWord('daniel', text) // 3
D: Arrays and strings

A:
START 
SET the searchWord function
  SET a variable and set it to the string argument.tolowercase().split into an array
  SET a word count varible
  FOR LOOP iterate through the string variable
    SET index = 0
    WHILE index < string length 
    Increment index
  IF the current index === arg1 
    Increment the count variable
  RETURN the count variable
*/
let text = 'hello daniel how are you today daniel Thats great daniel'

function searchWord(word, text) {
  let textArray = text.toLowerCase().split(' ');
  let wordCount = 0;

  for (let index = 0; index < textArray.length; index += 1) {
    let element = textArray[index];
    console.log(element);
    if (element === word) {
      wordCount += 1
    }
  }
  return wordCount;
}

console.log(searchWord('daniel', text));      // 3