/*
P: Write a function that accepts twio arguments, each containing a list of
numbers then returns the product of all combinations of number pairs.


Input: Two arrays with numbers
Output: One array with those numbers multiplied

Questions:
-What is concidered a pair?

Explicit Requirements:

Implicit Requirements:

E:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);

[2,4] // 8
[2,3] // 6
[2,1] // 2
[2,2] // 4
[4,4] // 16
[4,3] // 12
[4,1] // 4
[4,2] // 8

[2,4,4,6,8,8,12,16]

[2, 4], [4, 3, 1, 2]

[2, 4, 4, 6, 8, 8, 12, 16]

D:

A:

- write the function
- create an empty array varible
- iiterate through array 2
  - at each iteration multiple the index of array1
- retiurn array sorrted

C:

*/

function multiplyAllPairs(array1, array2) {
  let finalArray = [];

  array1.forEach(element => {
    array2.forEach(index => {
      finalArray.push(element * index);
    });
  });
  return finalArray.sort((a, b) => a - b);

}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]