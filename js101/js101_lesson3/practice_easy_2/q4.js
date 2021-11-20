// Question 4
// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let fourScore = "Four score and ";

let fullQuote = fourScore + famousWords;

"Four score and ".concat(famousWords);

console.log(fullQuote);