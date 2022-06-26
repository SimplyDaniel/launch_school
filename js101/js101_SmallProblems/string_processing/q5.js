/*

P: Write a function that take a string argument and swaps the
alphabetic chars from uppercase to lowercase and viceversa.

Input: String

Output: The same string with the chars swapped from upper to lowercase
and viceversa

Explicit Requirements:
- Swap lowercase to uppercase
- Swap uppercase to lowercase

Implicit Requirements:

E:

swapCase('CamelCase');              // "cAMELcASE"
          TFFFFTFFF
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

D: strings

A:
START
SET the swapCase() function
SET resultString variable
  FOR LOOP iterate through the string
  IF string[index] === string[index].toUpperCase()
    resultString += string[index].toLowercase();
  ELSE
    resultString += string[index].toUpperCase();
Retuen resultstring

C:

*/

function swapCase(string) {
  let resultString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === string[index].toUpperCase()) {
      resultString += string[index].toLowerCase();
    } else {
      resultString += string[index].toUpperCase();
    }
  }
  return resultString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
