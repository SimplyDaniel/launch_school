/*
P: Build a program that logs when the user will retire and how many
more years the user has to work until retirement;

Input: User input age
Output: Striung text with the amount of years they have left of work.

Questions:
- What if the uiser enters a text?

E:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

D:

A:

- Ask the user for age
- Ask the user for the age they would like to retire
- Show the current year and when they will retire
- Then display how many m,ore years they have working

C:

*/

const readline = require('readline-sync');

let currentAge = Number(readline.question('What is your age? '));

let retireAge = Number(readline.question('What age would you like to retire? '));

let retireYear = retireAge - currentAge;

let CURRENT_DATE = new Date();

const CURRENT_YEAR = CURRENT_DATE.getFullYear();

console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + retireYear}.`);
console.log(`You only have ${retireYear} years of work to go!`);