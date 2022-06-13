/*
P: Write a function that accepts an array and returns two arrays with the
elements split in half. If there are odd elemts push the odd element into
the first half of the array

Input: One array
Output: Two arrays with even elements if not even
the first array with the off number of elements

E:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

D: arrays\

A:

- Write the halvies function
- Declare a half variable;
- Declare a firstHalf variable;
- Declare a secondHalf variable;
- return second hald and first half;

C:

*/

function halvsies(array) {
  let half =  Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  let finalResult = [firstHalf,secondHalf];

  console.log(finalResult);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]