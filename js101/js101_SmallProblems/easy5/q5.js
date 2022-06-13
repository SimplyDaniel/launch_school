/*
P: Write a function that takes two argument arrays.
Returns those arrays combined with the elements taken in alteration

Input: Two arrays
Output: combined array with the elements of both arrays
in alteration

E:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

D: Arrays and variables

A:

- Write the interLeave function
- declare finalArray variable
- Isterate thrrough both arrays
- push the values into final result array
- return finalresult;

C:

*/

function interleave(array1, array2) {
  let finalArray = [];

  // solution with .forEach()

  array1.forEach((element, index) => {
    finalArray.push(element, array2[index]);
  });

  // solution with for loops

  // for (let index = 0; index < array1.length; index++) {
  //   finalArray.push(array1[index]);
  // eslint-disable-next-line max-len
  //   for (let innerIndex = 0; innerIndex < array2[index].length; innerIndex++) {
  //     finalArray.push(array2[index][innerIndex]);
  //   }
  // }

  console.log(finalArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]