/* eslint-disable max-len */
/*
P: Given a string that consists of some words and an assortment of non-alphabetic characters,
write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Input: Sting with chracters
Output: string with no char

Rules:
- Is the chars are consecutive return only one space
- Return only string with characters
E:

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("$$$ Hello!!!!! Daniel!!!!!! $$$");    // " Hello Daniel  "

D: Array and Strings

A:
- Create cleanUp function
- Create non-alpabetic chars variable
- iterate through string

C:
*/

cleanUp("---what's my +*& line?");    // " what s my line "
