/*
P: Write a function that takes a string argument
The function will return an object containing three properties
one: lowercase
two: uppercase
three: neitehr

Input: string
Output: object

Explicit Requirements:
- Return the object with the properties

Implicit Requirements:
- an empty string will still retorn the properties with the values 0
- If there in a space increment the nither property

E:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }

D: Objects

A:

START
SET the letterCaseCount function()
SET the object variable
SET the lowerCaseRegex variable
SET the uppercase regex variable
SET the specialcharaters variable regex variable
  FOR LOOP iterate through the string argument
  SET the index to 0
  WHILE the idx is less than string length
  Increment idx
IF the string[idx] === string[idx].toLowerCase()
  Increment lowercase object key
ELSE IF the string [idx] === stringidx.touppercase
  Increment uppercase object key
ELSE
  Increment neither
RETURN Object variable
C:

*/

function letterCaseCount(string) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  let lowercaseRegex = /[a-z]/;
  let uppercaseRegex = /[A-Z]/;

  for (let index = 0; index < string.length; index += 1) {
    if (lowercaseRegex.test(string[index])) {
      obj.lowercase += 1;
    } else if (uppercaseRegex.test(string[index])) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
