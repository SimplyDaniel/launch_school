/*
P: Write a program that ask the user to enter 6 numbers;

Input: Number

Output: The sixth number the user enters and if it
appears in the previous fuve numbers entered.

E:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23. // The last 5 numbers the user entered

Questions:
What should be retured if the user enters a non-numerical value?
What if the user enters the same numbers all 6 times?

Psudocode:
-ask the user to enter the 6 numbers
- Place the users numbers enetered into an array
- Iterate through the array
- If the 6th number is entered matches any of the previous 5 return
  - if the number appears in return Appears in text
  - If not retun does not appear in
D: Arrays

A:
- ask the user for input 6 times
- push those numbers into an empty array
- If the 6th number is in the previous 5 numbers
  - Return The number X appears in ...
  - Else if The number X does not appear in ...
C:

*/

const readline = require('readline-sync');

// function that will alow for messages to prompt on the console
function prompt(message) {
  console.log(message);
}

prompt('Enter the 1st number: ');
let firstNumber = Number(readline.question());

prompt('Enter the 2nd number: ');
let secondNumber = Number(readline.question());

prompt('Enter the 3rd number: ');
let thirdNumber = Number(readline.question());

prompt('Enter the 4th number: ');
let fourthNumber = Number(readline.question());

prompt('Enter the 5th number: ');
let fifthNumber = Number(readline.question());

prompt('Enter the last number: ');
let lastNumber = Number(readline.question());

let allNumbers = [];

// eslint-disable-next-line max-len
allNumbers.push(firstNumber,secondNumber,thirdNumber,fourthNumber,fifthNumber);

if (allNumbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${firstNumber},${secondNumber},${thirdNumber},${fourthNumber},${fifthNumber}`);
} else if (!allNumbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} does not appear in ${firstNumber},${secondNumber},${thirdNumber},${fourthNumber},${fifthNumber}`);
}