/*The following function unnecessarily uses two return statements to return
boolean values. Can you rewrite this function so it only has one
return statement and does not explicitly use either true or false? */


function isColorValid(color) {
  return color === 'blue' || 'green' ? true : false
}
console.log(isColorValid('blue'));
console.log(isColorValid('green'));