/*

P: Write a function that takes an array of numbers and returns an array
with the running total.

Input: Array of Numbers
Output: Array of numbers

E:

[2, 4, 8, 10] // 2, 6, 14, 24 is what will be returned

I need to be able to grab the previous index and add the current
idex to the current iteration.

and then output the array

D:

A:
- Create resultArr
- Iterate through current Array arg
- Push the current iteratetion then add the next one with the current one
- return result Arr

C:

*/

function runningTotal(array) {
  let resultArr = [];
  let sum = 0;

  for (let index = 0; index < array.length; index += 1) {
    resultArr.push((sum += array[index]));
  }
  console.log(resultArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []