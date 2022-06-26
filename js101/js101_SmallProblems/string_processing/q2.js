/*
P: Write a function that removes all the vowles within a string

Input: array with string elements
Output: The array with the string elements with all the vowels removed

Explicit Requirements:

- Remove all the vowles

Implicit Requirements:

- If the string has all vowels return empty string.

E:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);  // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['aeioud']) // ['d'];

D: Arrays

A:

START Remove Vowel Program
SET the removeVowel function
  SET the regex = /aeiou/g
  RETURN array.map(idx => idx.reaplce(regex, ''));
END program

C:

*/
function removeVowels(array) {
  let vowelRegex = /[aeiouAEIOU]/g;

  return array.map(idx => idx.replace(vowelRegex, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]