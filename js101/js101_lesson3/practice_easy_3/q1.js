// Question 1
// Write three different ways to remove all of the
// elements from the following array:

let numbers = [1, 2, 3, 4];

while (numbers.length) {
  console.log(numbers.shift());
}

console.log(numbers.splice(4));

while (numbers.length) {
  numbers.pop();
}

// Question 2

// What will the following code output?

console.log([1, 2, 3] + [4, 5]);