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

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true