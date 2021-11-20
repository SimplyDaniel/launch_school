// Question 2
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let newMD = munstersDescription.splice(0, 0, 'tHE m');

console.log(newMD);