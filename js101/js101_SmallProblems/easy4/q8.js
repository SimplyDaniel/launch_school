

/*
P: Write a function that takes a string as an argument and returns an object
of the different word length amounts.

Input: String
Output: Object

I need to be able to iterate through the string
Grab the length of each individual word sperated by spaces
increment the counters of the word amounts
return the object with the incremented amounts


E:
'Hello Daniel, How are you?' // {"5": 1, "6": 1, "3": 3 } is what it will return

D:

A:
- Declare wordsArray = words.split(); / This splits the string argument
- declare a count object count = {};
- iterate through the wordsArray
  - declare a wordSize variable = wordsArray[index].length
  - if wordsize == 0 continue
- If !count[wordSize] count = 0
  - count[wordSize] += 1
- Return wordcount;


C:

*/

function wordSizes(string) {
  let resultObj = {};
  let stringSplit = string.split(' ');

  for (let index = 0; index < stringSplit.length; index++) {
    let wordSize = stringSplit[index].length;
    if (wordSize === 0) {
      continue;
    }

    if (!resultObj[wordSize]) {
      resultObj[wordSize] = 0;
    }
    resultObj[wordSize] += 1;
  }

  console.log(resultObj);

}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}