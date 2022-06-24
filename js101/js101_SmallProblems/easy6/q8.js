/*
P: Wrtite a function that accepts an argument first lastname
and returns a tring with the last name first and then the first name
with a comma

Input: Firstname "space" Lastname
Output: Lastname, FirstName

Explicit Requirements:
- Return the Lastname comma and first name
-

Implicit Requirements:

Questions:
- Can I assume that the input will always have a space?
- Should I return the first letters capitalized?

E:
swapName('Joe Roberts');    // "Roberts, Joe"

D: Strings and Arrays

A:
- Write the swapName function
- declare resuult variable
- declare a varible and initalize it to string.index of ' ';
- return string. splice(indexof) plus a comma and string 0 , index of;

C:

*/
function swapName(string) {
  let space = string.indexOf(' ');
  let halfString = string.slice(space).trim();

  return `${halfString}, ${string.slice(0,space)}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"