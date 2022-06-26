/*
P: Write a function that capitalizes the char of every word
a word is after a ' ' any white space

Input: String
Output: The same string with the first char uppercased

Explicit Requirements:
- A word is after any white space
- the char of the word has to be uppercased

Implicit Requirements:
- If the char is after a whitespace but does not start with char dont uppercase

E:

wordCap('four score and seven');       // "Four Score And Seven"
         ^   T^    T^  T^
wordCap('the javaScript language');    // "The Javascript Language"

D: Strings

A:

START
SET the wordCap() function
SET the words variable
  FOR LOOP iterate through string
  Reassign the words variable
  to words = word[i][0].toUpperCase() + words.substring(1);
RETURN words.join(' ');
C:

*/

function wordCap(string) {
  let words = string.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    // eslint-disable-next-line max-len
    words[index] = words[index][0].toUpperCase() + words[index].substring(1);
  }
  return words.join(' ');
}
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
