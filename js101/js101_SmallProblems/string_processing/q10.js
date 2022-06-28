/*
P: Write a function that takes two arguments, one being a word arg
and the second being a text argument. The function should return the
word arg highlighed and uppercased with asterics.

Input: String
Output: String with the word argument

Explicit Requirements:

- The word arg should be retunrs with **WORD**
- It should return all the instance of word
- Mush have asterics on eachside

Implicit Requirements:

E:

searchWord('sed', text);

D: Arraysand string

A:

START
SET the searchWord function
SET an empty regex variable = \bsed\b;
  SET a new string vairble and use the . replace method 
RETURN new sting variable 

C:

*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';


function searchWord(word, text) {

  const regex = /\b${word}\b/gi;
  
  return text.replace(regex, '**SED**');
}

console.log(searchWord('sed', text));
