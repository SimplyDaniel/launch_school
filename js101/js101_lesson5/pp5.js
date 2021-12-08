// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// let munstersKeys = Object.values(munsters);
// let totalMaleAge = 0;

// munstersKeys.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });

// console.log(totalMaleAge);
let munstersKeys = Object.entries(munsters);
// console.log(munstersKeys);
munstersKeys.forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
});
