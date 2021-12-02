const readline = require('readline-sync');

function prompt(greet) {
  console.log(`=> ${greet}`);
}

prompt('Hello, welcome to "How big is my room?" calculator.');

prompt('Please enter the length of the room in meters:');
const meterLength = readline.question();
let sqftLength =  meterLength * 10.7639;

prompt('Please enter the width of the room in meters:');
const meterWidth = readline.question();
let sqftWitdh = meterWidth * 10.7639;

let area = meterLength * meterWidth;
let sqftRoom = sqftLength * sqftWitdh;

console.log(area);
console.log(sqftRoom);

prompt(`The area of the room is ${area} square meters (${sqftRoom.toFixed(2)} square feet).`);