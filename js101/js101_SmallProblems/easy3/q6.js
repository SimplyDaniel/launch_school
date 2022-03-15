/* eslint-disable max-len */
/*
P: Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player,
Then construct a list of words and place them into the story, creating an often silly or funny story as a result.
Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Input: String
Output: Multiple Strings with a story

Rules:

- Have the user enter 4 inputs
- Use the inputes to create a story that I have created:
Questions:
- Does the questions have the be random everytime a different user or the same user enters 4 different inputs?

E:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

D: Mostly working with strings

A:

1. create prompt function
2. grab the users inputs
3. output the users inpuuts into a random story

C:
*/

const rlSync = require('readline-sync');

function prompt(msg) {
  console.log(msg);
}

prompt('Hello welcome to MadLibs, you will enter a noun, verb, adjective and a adverb.');

prompt('Please enter a noun');
let noun = rlSync.question();

prompt('Please enter a verb');
let verb = rlSync.question();

prompt('Please enter a adjective');
let adjective = rlSync.question();

prompt('Please enter a adverb');
let adverb = rlSync.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);