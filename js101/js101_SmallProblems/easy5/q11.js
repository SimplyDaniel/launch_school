/*
P: Write a function that accepts one argument an integer.
The function will return the time in 00:00 format.
Anything positive is after midnight, anything negative is before midnight.

Input: An interger either negative or positive
Output: a boolean T or F.

E: All examples will log true:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

D:

0 = 00:00 Hour: Min

console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");

A:

C:

*/