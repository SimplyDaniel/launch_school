// Question 5
/* Given an array of numbers [1, 2, 3, 4, 5],
mutate the array by removing the number at index 2,
so that the array becomes [1, 2, 4, 5]. */

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 1); // deletes 1 elements at indes 1
console.log(numbers);

// we can use the .splice method to remove index 1
// which houses the number 2.