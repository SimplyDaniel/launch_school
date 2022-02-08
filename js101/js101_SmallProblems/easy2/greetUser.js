const rlSync = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Hello stranger, what is your name?');

function greet() {
  let userName = rlSync.question();
  if (userName.includes('!')) {
    console.log(`WHY ARE YOU YELLING ${userName.toUpperCase()}`);
  } else (
    console.log(`Hello, ${userName}.`)
  );
}

greet();