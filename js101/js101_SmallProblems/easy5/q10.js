/*
P: Write a function that takes an array as an argument
returns the average of all integers rounded down to the integer
componet average.

Input: An array with multiple integers

Output: the avergae of those integers rounded down

E:


average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

D: An array and variables

A:
- Write the average function
- Decale and initalize the addedresult var
- declare and inatilize average variable
  - Use a math method to round down (if there is one)
- itterate through the array argument.
- add the current interateion to the average var
  - add the next iterateion to the added result variable;
  - return average.
C:

*/

function average(array) {
  let addedresult = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    addedresult += element;
  }

  let averageResult = Math.floor(addedresult / array.length);

  return averageResult;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40