/*
P: Write a function that takes a non empty string argument
and returns the middle number.

If the string has an odd length, return exactly on character.
If the string is even length return two characters


Input: String

Output: 1 character or 2 chacters

E:

centerOf('I Love JavaScript'); // "a" length of 17 / 2 = 8.5
centerOf('Launch School');     // " " 13 / 2 = 6.5;

D:

A:

- Write the centerOf function
- declare a result variable
  - iterate through the string
    - if the string.length is evenly divisibal by 2
      - declare variable that has the char that / 2
      - rettun the char + 1;
      - else trun 1 char;

C:

*/

function centerOf(string) {
  let stringLength = (string.length / 2) - 1;
  let oddCharacter = string.charAt(stringLength + 1);
  let evenCharacter = oddCharacter + string.charAt(stringLength + 1);

  if (stringLength % 2 === 1) {
    console.log(oddCharacter);
  } else if (stringLength % 2 === 0) {
    console.log(evenCharacter);
  } else {
    console.log(oddCharacter);
  }

}
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
// let string = 'I Love JavaScript';
// let stringLength = string.length / 2;
// let indexOf = string.charAt(stringLength);
// console.log(indexOf);