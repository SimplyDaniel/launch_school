/*
P: Write a function that accepts a string as an argument.
The function will return the string with double the amount of characters.


Input: String
Output: The string with characters doubled

E:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

D: string

A:

- Write the repeater function
- declare a results variable
- iterate through the string aergument
- after each iteration add the current iteration to the results variable
 - After the next iteration add the previous index
- Return results variable

C:

*/

function repeater(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    result += element;
    for (let innerIndex = 0; innerIndex < string[index].length; innerIndex++) {
      const innerElement = string[index];
      result += innerElement;
    }
  }
  console.log(result);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
