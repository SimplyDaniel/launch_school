/*
P: Write a functiont that takes an array as an argument
the function will count the number of occorences of each element.

Input: Array
Output: The element with the number oif occurences along side

E:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

console output -- your output sequence may be different

car => 4
truck => 3
SUV => 1
motorcycle => 2

D: Arrays and mnaybe objects

A:

- Write the count function
- declare count variable initailize to object
- iterate through the array
- add the keys to the object
- increment count for every occurance
- return object and the key values usuing dot notion
C:

*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck','suv'];

function countOccurrences(array) {
  let count = {};

  for (let index = 0; index < array.length; index++) {
    let wordCount = array[index];
    if (wordCount === 0) {
      continue;
    }

    if (!count[wordCount]) {
      count[wordCount] = 0;
    }
    count[wordCount] += 1;
  }

  for (const [key, value] of Object.entries(count)) {
    console.log(`${key} => ${value}`);
  }
}

countOccurrences(vehicles);