/* For this practice problem, write a program that outputs
The Flintstones Rock! 10 times,
with each line indented 1 space to the
right of the line above it.
The output should start out like this:

Copy Code
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ... */


let string = "The Flinstones Rock!";
for (let padding = 1; padding <= 10; padding++) {
  console.log(' '.repeat(padding) + string);
}