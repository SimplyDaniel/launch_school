/*

P: Write a function that takes a floating point number
representing an angle and returns the degree of the angle
with seconds and and minuets.

Input: Number
Output: Number degrees, minutes and seconds

Rules:
- I Know that I have to return the niumber representing degrees
- Return the minuets in single quote and seconds in double quote
  - 60 min = 1 degree
  - 60 seconds = 1 min

E:

degree, min, seconds

dms(30);           // 30°00'00"

dms(76.73);        // 76°43'48"
60 min = 1 degree // 60 * .73 = 43.8
60 seconds =  1 minute // .8 * 60 = 48

dms(254.6);        // 254°35'59"
60 min = 1 degree // .6 * 60 = 36 remainder 1
60 seconds =  1 minute // 1 * 60 = 60 round by 1 = 59

dms(93.034773);    // 93°02'05"
60 min = 1 degree //
60 seconds =  1 minute //

D:

A:

- Write function dms()
- Declare and initialize degree = math.floor(num)
- declare and initialize degreeMin;
  - Initalize it to num % 1 * 60
- Declare and initialize degreeSecond;
  - Initalize it to num % 1 * 60
- return numbers c onverted to string


C:

*/

let degreeSymbol = '\u00B0';

function dms(number) {
  let degree = String(Math.floor(number));
  let degreeMin = String(Math.floor((number % 1) * 60));
  let degreeSecond = Math.abs((number % 1) * 60);
  let finalDegreeSecond = String(Math.floor(degreeSecond % 1 * 60));

  console.log(`${degree + degreeSymbol}${degreeMin}'${finalDegreeSecond}"`);

}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"