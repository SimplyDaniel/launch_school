const rlSync = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt('Please enter a positive integer');
let number1 = Number(rlSync.question());

prompt('Please enter another positive integer');
let number2 = Number(rlSync.question());

prompt(`${number1} + ${number2} = ${number1 + number2}`);
prompt(`${number1} - ${number2} = ${number1 - number2}`);
prompt(`${number1} * ${number2} = ${number1 * number2}`);
prompt(`${number1} / ${number2} = ${number1 / number2}`);
prompt(`${number1} % ${number2} = ${number1 % number2}`);
prompt(`${number1} ** ${number2} = ${number1 ** number2}`);