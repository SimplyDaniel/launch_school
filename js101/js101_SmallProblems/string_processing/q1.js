/*
P:  Write a function that returns TRUE if all the charaters
in the string argument are uppercase. FALSE otherwise

Input: String
Output: Boolean

Explicit Requirements:
- Return TRUE if all the characters in the string arg are UPPERCASE
- Return FALSE if one of them are not
- Ignore non alphabetic characters

Implicit Requirements:
- Return TRUE if argument is an empty string

E:

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false

D: Strings

A:

START Uppercase program
SET the isuppercase(string) function
SET a regex variable
SET a newString varibale and replace all non alphanumeric charaters
SET allUppercase Varible count = 0;
FOR LOOP iterate though the string argument
  SET idx = 0
  WHILE idx less than string.length
  Increment idx
IF the current index !== index.touppercase()
  RETURN FALSE;
ELSE IF current index iteration === index.toUppercase()
  ADD 1 to uppercase count;
C:

*/


function isUppercase(string) {
  let regex = /[^a-zA-Z]/g;
  let newString = string.replace(regex, '');
  let uppercaseCount = 0;

  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] !== newString[index].toUpperCase()) {
      return false;
    } else if (newString[index] === newString[index].toUpperCase()) {
      uppercaseCount += 1;
    }
  }
  // console.log(uppercaseCount);
  return uppercaseCount > 0;
}

console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
