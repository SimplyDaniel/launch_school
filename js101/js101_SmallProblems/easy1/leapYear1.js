function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// Wiritten Practice Exam

/* On line one we declare a function with the name isLeapYear with
one paramater. On line 2 we use an if statement that checks if the
argument 'year' that is divisable by 400 and if the remiander is 0
return true. We then use an else if statment on like 4 that checks
another condition, the year argument that is passed into the function
when invoked. This else if conditional will divide the year by 100
and if the reminder is 0 it will return false which we see on line 5.


*/