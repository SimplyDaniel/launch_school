// Determine whether the name Dino appears in the strings below
//-- check each string separately

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace('important', 'urgent');

console.log(advice);

