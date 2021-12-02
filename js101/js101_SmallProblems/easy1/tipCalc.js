const readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Hello, welcome to Tip Calculator!');

prompt('Please enter the amount of your bill');
let billAmount = Number(readlineSync.question());

prompt('Please enter the percentage you would like to tip');
let percentageTip = readlineSync.question();

let tipAmount =  Number(billAmount * (percentageTip / 100));

let billTotal = Number(billAmount + tipAmount);


prompt(`The amount of tip is: ${'$' + tipAmount }`);

prompt(`The total bill with tip is: ${'$' + billTotal}`);
