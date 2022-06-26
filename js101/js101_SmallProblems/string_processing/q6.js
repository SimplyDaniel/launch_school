/*
P: Write a function that takes a string argument and returns the string with
staggard caps. Starting with capital letter and then lower case letter.

Input: string
Output: the same string with staggerd chars capital or lowercased

Explicit Requirements:

- The string will have to start with a capital letter
  - then move to a lowercases => HeLlO

Implicit Requirements:
-

E:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"

I LoVe lAuN  c  H ScHoOl!
012345678910 11 12

D: Strings

A:

START
SET the staggardCase function()
SET a staggardResult variable = '';
  FOR LOOP iterate through the string
    SET index variable
    WHILE index < string.length
    Increment Index
    SET currentElement variable
  IF the index % 2 === 0
  Add the element.toUpperCase() to staggeredresult var
  ELSE IF the index % 2 === 1
  Add the elementtoLowercase() to staggerdResult var
RETURN Staggerdcase var
END
C:

*/
function staggeredCase(string) {
  let staggerdResult = '';

  for (let index = 0; index < string.length; index++) {
    let currentElement = string[index];

    if (index % 2 === 0) {
      staggerdResult += currentElement.toUpperCase();
    } else if (index % 2 === 1) {
      staggerdResult += currentElement.toLowerCase();
    }
  }
  return staggerdResult;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"