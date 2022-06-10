/*
P: Write a function that returns true if the string is a palindrome
and returns false. A palindrom is a word, phrase that
reads the same forward as backward.

Input: String
Output: Boolean

Questions:

What should I retirn if the user enters a number?

E:

isPalindrome('madam'); spelt regular: madam | spelt backwards: madam
isPalindrome('356653'); 356653 | 356653

civic // true
kayak // true
car // false

D: Array's,

A:
- Declare an stringArr and reverse() the string into and array.
- Join the arry
- Compare the declared newString with string
  - If the are the same return true
  - else return false
C:

*/

function isPalindrome(string) {
  let stringArr = string.split('');
  let newString = stringArr.reverse().join('');

  if (string === newString) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function isRealPalindrome(string) {
  string = removeNonLetterNumber(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumber(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if (isLetter(string[index]) || isNumber(string[index])) {
      result += string[index];
    }
  }
  return result;
}


function isLetter(char) {
  return char >= "a" && char <= "z";
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}


// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false