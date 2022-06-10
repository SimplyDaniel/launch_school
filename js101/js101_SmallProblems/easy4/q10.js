/*
P: Create a function that accepts a tring srgument and returns
a string with the first and last index of that word swapped

Input: String
Output: String with the first and last index flipped

I have to seperate each word within a string
and return the first index and the last index


E:
swap('Hello Daniel) // 'oellH lanieD'

D:

A:

- create an resultStr = '';
- create a for loop and decrement the loop
- iterate until the length and then return result Str

C:

*/

// function swap(str) {
//   let resultStr = '';

//   for (let index = str.length; index >= 0; index -= 1) {
//     resultStr += str[index];
//   }

//   console.log(resultStr);
// }

function swap(str) {
  let strArray = str.split('');
  let resultStr = strArray.reverse().join('').split(' ').reverse().join(' ');

  return resultStr;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"