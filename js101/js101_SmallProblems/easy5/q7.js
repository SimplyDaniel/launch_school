/*
P: Write a function that accepts two arguments, both arrays.
The function will return a new array with the product of each index
of both arrays. Array1[0] * Array2[0]...

Input: Two arrays with number elements
Output: a new array with the index multiplied;

E:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

D:
Arrays and variables

A:

- Write the multiply list function
- declare a finalresult array varaible
- iterate through the arrays
- multiply array1[0] and array2[0]
- and so on until no more elements
C:

*/

function multiplyList(array1, array2) {
  let finalResult = [];

  for (let index = 0; index < array1.length; index++) {
    let element = array1[index] * array2[index];
    finalResult.push(element);
  }
  return finalResult;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
