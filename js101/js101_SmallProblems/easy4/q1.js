/*
P: Build a program that builds teddys age randomly and logs it to the console

Input: random number between 20 and 120
Output: string with number

E: output to the console: Teddy is 69 years old!

D:

A:

- create randomAge() function
- declare and initialize randomAge = 20 * 120;
- Use the Math. random features and use the startAge * 120 to generate number.
- return randomAge

C:

*/

function randomAge(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomAge(20, 120);

console.log(`Teddy is ${age} years old!`);