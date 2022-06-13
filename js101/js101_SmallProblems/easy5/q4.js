/*
P: Write a function that accepts an unordered list as an argument, and returns
the element that appears twice in the array

Input: Unorderd array
Output: the number that appeares twice in the undered array

Questions:
- What should I return if the array is empty?
- If there are 3 of the same element should I still only return one?

E:

findDup([1, 5, 3, 1]);                                // 1

D: Arrays and variables

A:

- write the findDup function
- declare a sorted array
- iterate through the sorted array
- compare the index 0 with index 1 and so on...
- if index 0 and index 1 are the same
- push the inex into variable
- else continue
- return same variable

C:

*/

function findDup(array) {
  let sortedArray = array.sort((a,b) => a - b);
  let dupElement = [];

  for (let index = 0; index < sortedArray.length; index++) {
    if (sortedArray[index] === sortedArray[index + 1]) {
      dupElement.push(sortedArray[index]);
    } else {
      continue;
    }
  }
  return dupElement[0];
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18, 9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70,
  85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56,
  7, 34, 57, 74, 45, 11, 88, 67, 5, 58]));    // 73
console.log(findDup([1,2,3,3,3,3,4]));