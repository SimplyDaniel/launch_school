// This program will help the user determine thier car/mortgage payment 
/* The program will ask for three pieces of information, 
  loan amount, APR(Annual Percentage Rate), and loan duration */

let readline = require('readline-sync');

function prompt(message){
  console.log(`=> ${message}`);
}

function invalidnumber(number) {
  return Number.isNaN(Number(number));
}

prompt('Hello, welcome to the car/mortgage calculator please enter your information below:');

prompt('What is the amount of your loan?');

let loanAmount = Number(readline.question());

while (invalidnumber(loanAmount)) {
  console.log('Hmm.. That is not a valid number. Please enter a valid number');
  loanAmount = readline.question();
};

prompt('What is the Annual Percentage Rate? Please enter as a % value (e.g 5%)');
let annualPercentageRate = Number(readline.question());

while (invalidnumber(annualPercentageRate)) {
  console.log('Hmm that is not a valid number. Please enter a valid number...');
  annualPercentageRate = readline.question();
}

let monthlyAPR = (annualPercentageRate / 100) / 12;

prompt('How many years is the duration of the loan?');
let durationOfLoanYears = readline.question();

while (invalidnumber(durationOfLoanYears)) {
  console.log('Hmm that is not a valid number. Please enter a valid number...');
  durationOfLoanYears = readline.question();
}

let durationOfLoanMonthly = 12 * durationOfLoanYears; 

let monthlyPayment = loanAmount * (monthlyAPR / (1 - Math.pow((1 + monthlyAPR), (- durationOfLoanMonthly))));

console.log(`$`+ monthlyPayment.toFixed(2));