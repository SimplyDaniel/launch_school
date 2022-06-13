/*
P: Write a function that accepts an array as an argument, multiplyes all of the
values within the argument and divides the final value by the number of elements


Input: Array
Output: String with three decemile places

Rules:

E:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

D: Arrays and Variables

A:
What do I need to do?
- mutiply all elements
- divde the final result by number of elements
- return as string
------------------------
- Write the multi average function
- declare a final result variable
- use the reduce method or even a for loop
- convert final result variable to string and use the toFixed method with 3;
C:

*/

function multiplicativeAverage(array) {
  let arrayLength = array.length;

  // eslint-disable-next-line max-len
  let reducedArray = array.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

  let finalResult = (reducedArray / arrayLength).toFixed(3);

  return finalResult;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"