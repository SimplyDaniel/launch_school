/*
P: Write a function that takes a atring argument, and returns an array
with the word or words from the string. Followed by a space and then the length.


Input: String
Output: An array with the string info and a number

Explicit Requirements:
- If the string is empty return an epty array
- The array has to be the string word passed into it followed by a space 

Implicit Requirements:

E:

wordLengths('cow sheep chicken');
= > ["cow 3", "sheep 5", "chicken 7"]

D: Array

A:

START
SET the wordsLength function
  SET an empty array variable
  SET a variable with the string argument split into an array
FOR LOOP iterate through the string split variable
  SET index = 1
  WHILE index is less than 
  Increment the index push the 
  SET current element variable 
  SET a variable with the current index length
    IF the current index === '' 
      RETURN Empty array varible
    ELSE IF (current index === undefined)
      Return empty array varible
  PUSH the current elemnt varible to the empty array + element.length
RETURN empty array variable
END
C:

*/

function wordLengths(string) {
  let resultArray = [];

  if (string === undefined) return resultArray;
  let stringArray = string.split(' ');

  for (let index = 0; index < stringArray.length; index += 1) {
    let currentIndex = stringArray[index];
    let length =  currentIndex.length;

    if (currentIndex === '') return resultArray;
    resultArray.push(currentIndex, length);
  }
  return resultArray;
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]
console.log(wordLengths('baseball hot dogs and apple pie')); // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
console.log(wordLengths("It ain't easy, is it?")); // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
console.log(wordLengths('Supercalifragilisticexpialidocious')); // ["Supercalifragilisticexpialidocious 34"]
console.log(wordLengths(''));      // []
console.log(wordLengths());        // []