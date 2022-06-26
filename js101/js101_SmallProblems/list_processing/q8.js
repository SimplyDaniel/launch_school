/*
P: Write a function that takes a grocery list, in a two dimensional array
the function will return a one dimensional array wiht the string amount listed.

Input: Two dimentional array
Output: Single array with multiple values

Explicit Requirements:
- We have to return the name of the fruit equal to the quantity.

Implicit Requirements:

Questions?

- Should I return an empty array is no values are given?

E:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
returns ["apple", "apple", "apple", "orange", "banana", "banana"]

buyFruit([['orange', 1], ['pear', 1]]);
=> ["orange", "pear"]

D: Arrays

A:


Psuedo code:
START Grocery list
SET the function groceryList() with one parameter
SET Empty array varible so we can return the result of the argument
FOR LOOP iterate through the multiple dimentional array
  WHILE The index is less than the number index
  PRINT the grocery item / Push the grocery item
END

Algo:
- Write the buyFruit function();
- declare and initalize the empty array result variable
- iterate through the multiple dimentional array
  - while the current index is less than the number idex
  - push/print the string index to result array

*/

function buyFruit(array) {
  let groceryList = [];

  for (let index = 0; index < array.length; index++) {
    let element = array[index][1];
    let stringElement = array[index][0];
    let startingIdx = 0;

    while (startingIdx < element) {
      groceryList.push(stringElement);
      startingIdx += 1;
    }
    // startingIdx -= 1;
  }
  return groceryList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
console.log(buyFruit([['orange', 10], ['pear', 1]]));

