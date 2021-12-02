const readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function sumTotal(targetNum) {
  let total = 0;
  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }
  return total;
}

function sumProduct(targetNum) {
  let total = 1;
  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }
  return total;
}

// console.log(sumProduct(6));
// console.log(sumTotal(5));

prompt('Please enter an integer higher than 0:');
let number = readlineSync.question();

prompt('Enter "s" to compute the sum, or "p" to compute the product. s');
let operation = readlineSync.question();

if (operation === 's') {
  let sum = sumTotal(number);
  console.log(`The total of the integers between 1 and ${number} is ${sum}`);
} else if (operation === 'p') {
  let product = sumProduct(number);
  console.log(`The total of the integers between 1 and ${number} is ${product}`);
} else {
  console.log(`Oops that is not a valid operation`);
}

