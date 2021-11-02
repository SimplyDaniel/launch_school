// Question 3
// Determine whether the following object of people and their age
// contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));

// We would have to use the .hasOwnProperty() object function
// To determine if an object has that property