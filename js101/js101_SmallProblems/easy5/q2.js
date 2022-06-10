/*
P: Write a function that combines two arrays and combined them together.
There should only be 1 of each value/element

Input: Two Arrays

Output: One array with no duplicate values

E:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
[1,1,1,1], [1,1,1,1] // [1]

Questions:

- What if the array arguments have elemets not in order?
  -Example: [1,4,3,2], [5,7,6,8] // what should the
  values be in order when returned?
- What if the arguments are empty?

D: Arrays and variables

A:

- Write the union function with two args
- combine the arrays, arg1 and arg2
- Decale a combined array var
- Decale a resultArray variable
- Once I combine them, I iterate through the array
- if the current iterate is not included in the finale result variable
- push or add the current index to the result
- else continue
-return result;
C:

*/

function union(array1, array2) {
  let finalResult = [];
  let combinedArray = array1.concat(array2);

  for (let index = 0; index < combinedArray.length; index++) {
    const element = combinedArray[index];

    if (!finalResult.includes(element)) {
      finalResult.push(combinedArray[index]);
    } else {
      continue;
    }
  }
  return finalResult;
}

console.log(union([1, 3, 5], [3, 6, 9]));   // [1, 3, 5, 6, 9]
console.log(union([1, 1, 1], [3, 6, 9]));  // [1,3,6,9];
console.log(union([1, 1, 1], [1, 1, 1]));  // [1,3,6,9];