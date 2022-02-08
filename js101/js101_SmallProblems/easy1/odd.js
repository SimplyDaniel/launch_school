function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

/*
On line 1 we have a function declaration with the name isOdd
with one paramater. On line 2 we call the method Math.abs() which
returns the absolute value of a number. We then return the number
argument passed into the function and find the reminder
of the number that is passed into the function and if the reminder is 1
which would be odd.

*/

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true