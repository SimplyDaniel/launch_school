/*
P: Write a function that rotates an array buy moving the first element to the end of the array

Input: An array
Output: An Array

Explicit Requirements:
- Do not mutate the original array
- If the input is not an array return 'undefined'
- If the input is an empty array return an empty array

Implicit Requirements:

E:

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]

D: Arrays 

A:

- Write the rotateArray function with one parameter
  - Declare a variable named 'arrayCopy' & use .slice() so we don't mutate the original array
  - Declare a 'result' variable and initialize it to an empty array
  - If the array !== 'array' return undefined
  - If the array === [] return [];

  - Iterate through the array argument using a FOR loop
    - Declare a variable 'startingIndex' = arrayCopy[0];
    - Starting index at 1 
    - At each iteration push the index 
    - then once loop is done push the startingIndex variable 
  
    - Return result 

*/

let array = [1, 2, 3, 4];

function rotateArray(array) {
  if (array.length === 0) return [];
  if (typeof array !== 'object') return undefined;

  let arrayCopy = array.slice();
  let startingIndex = arrayCopy[0];
  let result = [];

  for (let index = 1; index < arrayCopy.length; index++) {
    result.push(arrayCopy[index]);
  }
  result.push(startingIndex);
  return result;
}

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]