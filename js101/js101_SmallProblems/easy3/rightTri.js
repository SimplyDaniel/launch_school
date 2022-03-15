/*
P: Write a function that takes a positive integer, n, as an argument
and logs a right triangle whose sides each have n stars.
The hypotenuse of the triangle (the diagonal side in the images below)
should have one end at the lower-left of the triangle,
and the other end at the upper-right.

Input: Number
Output: Symbol * the length if the number

Rules:
- The hypotnuse should have one end at the upper right and lower left.
- Should be the amount of the argument
E: So, if the argument is 5 it should log:
012345
     *
    **
   ***
  ****
 *****
D:
Working with numbers => symbols;

A:
1. Write the triangle() function;
2. if the number is less than argument print ' '
 - until it hits the index then print *
C:

*/

function triangle(number) {
  let idx = 0;
  while (idx <= number) {
    console.log(`${' '.repeat(number - idx) + '*'.repeat(idx)}`);
    idx += 1;
  }
}

triangle(5);
triangle(9);
triangle(3);

