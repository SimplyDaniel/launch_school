/*
P: Modity the previous function, so it ignores the non alphabetic chars
The nonalphabetic chars should still be included in the return value.
They just dont count when deciding weither to uppercase or lowercase.

Input: String
Output: Uppercase and Lowercase string

Explicit Requirements:
- Starts with an uppercase letter in the string.
- Still include the special chars

Implicit Requirements:
- What should I return if the string is empty?
-

E:

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
                                                        0123456789
                                                        T FTFT FTF
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
                                           01234567
                                           TFT FTFT
D: Strings

A:

START
SET the staggeredCase() function
  SET the staggeredResult Varible to an empty string
  SET a toggle variable to false
  SET specialChar regex = /[a-z]/gi
    FOR LOOP iterate through the string
    SET index var = 0
    WHILE index var < string length
    Increment index
  IF the string[index] include special chareter
    SET / add to the staggeredresult var
  ELSE IF the toggle is true
    SET / add the string[index].toUpperCase() to staggered case var
    toggle = false
  ELSE (toggle is false)
    SET / add the string[index].toLowercase() to  staggered case var
  RETURN staggeredResult var
END
C:

*/

function staggeredCase(string) {
  let staggardResult = '';
  let toggle = true;
  let specialChar = /[^A-Za-z]/;

  for (let index = 0; index < string.length; index += 1) {
    if (specialChar.test(string[index])) {
      staggardResult += string[index];
      continue;
    }

    if (toggle) {
      staggardResult += string[index].toUpperCase();
      toggle = false;
    } else {
      staggardResult += string[index].toLowerCase();
      toggle = true;
    }
  }
  return staggardResult;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);