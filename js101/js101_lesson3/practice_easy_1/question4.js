// Using the following string, create a new string that contains all lowercase
// letters except for the first character, which should be capitalized.
// Ex. let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let string = munstersDescription[0].toLocaleUpperCase() +
            munstersDescription.slice(1).toLowerCase();

console.log(string);


