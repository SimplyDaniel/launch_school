/*
P: Write a function that returns true if all parentheses in the
string are properly balanced, false otherwise.

Input: string with parentheses
Output: boolean

Explicit Requirements:
- the function retunrs true or false
- matching parentheses are () not )(

Implicit Requirements:

E:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);

D: strings

A:
- create the isBalanced function
- create a varible to house the parentesis
  - left parentheses
  - right parenteses
- iterate through the string
  -if the iteteration encounters a right or left parentheses
  - reassign the variable
- return left parentheses variable.length is equal to right parenetheses

C:

*/

function isBalanced(string) {
  let leftParentheses = 0;
  let rightParentheses = 0;

  for (const index of string) {
    if (index === '(') {
      leftParentheses += 1;
    } else if (index === ')') {
      rightParentheses += 1;
    }
  }

  // for (let index = 0; index < string.length; index++) {
  //   if (string[index] === '(') {
  //     leftParentheses += 1;
  //   } else if (string[index] === ')') {
  //     rightParentheses += 1;
  //   }
  // }
  // console.log(rightParentheses);
  // console.log(leftParentheses);

  console.log(leftParentheses === rightParentheses);
}

isBalanced("What (is) this?");
isBalanced("What is) this?");
isBalanced("What (is this?");
isBalanced("((What) (is this))?");
isBalanced("((What)) (is this))?");
isBalanced("Hey!");
isBalanced(")Hey!(");
isBalanced("What ((is))) up(");