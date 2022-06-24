/*
P: Write a function that accepts two args, a count and a number.
The funciton should return the same number of elements as the count var
and it should contain multiples of the num variable

Input: Count and nuumber
Output: Array with the amount of count elements

Explicit Requirements:
- Return an array with the amount of count input
- The elemts should be multiples of the number variable
- if count is 0 return emppty array

Implicit Requirements:

E:

sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

D:


sequence(5, 1);          // [1, 2, 3, 4, 5];
Count = 5
Number = 1

for let 1 = 1 < i <= count; i++

A:

- write the sequence function
- declare an empty array varible
- create a for loop
- at each iteration were going to add the num by the cirrent iteration
  - push that iteration to the empty array varible
- were going to return that array

C:

*/

function sequence(count, number) {
  let resultArray = [];

  for (let index = 1; index <= count; index++) {
    const element = number * index;
    resultArray.push(element);
  }
  console.log(resultArray);
}

sequence(5, 1);          // [1, 2, 3, 4, 5];
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
