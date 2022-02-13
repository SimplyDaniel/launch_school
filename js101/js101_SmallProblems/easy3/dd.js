function crunch(string) {
  let idx = 0;
  let crunchWord = '';

  while (idx <= string.length) {
    if (string[idx] !== string[idx + 1]) {
      crunchWord += string[idx];
    }
    idx += 1;
  }
  return crunchWord;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""