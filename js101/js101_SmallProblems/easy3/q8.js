/* eslint-disable max-len */
/*
P:

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Input: Number
Output: String
E: The average of three numbers will output a letter grade

getGrade(95, 90, 93);    // "A" 95 + 90 + 93 = 92.67 = A
getGrade(50, 50, 95);    // "D" 50 + 50 + 95 = 195 / 3 = 65 letter grade D

75 + 80 + 65 = 73.33 = Letter grade C.

D: Numbers and the algo will output a string

A:
1. Create getGrade() function
2. Add the three number arguments;
3. Save the number to a variable
4. Write if...else of statements.
5. return letter grade
C:

*/

function getGrade(grade1, grade2, grade3) {
  let totalGrades = (grade1 + grade2 + grade3) / 3;

  if (totalGrades >= 90 && totalGrades <= 100) {
    return 'A';
  } else if (totalGrades >= 80 && totalGrades <= 90) {
    return 'B';
  } else if (totalGrades >= 70 && totalGrades <= 80) {
    return 'C';
  } else if (totalGrades >= 60 && totalGrades <= 70) {
    return 'D';
  } else if (totalGrades < 60) {
    return 'F';
  }
  return 'there was an error';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"