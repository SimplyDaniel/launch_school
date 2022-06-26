/*
P: Write a function that takes two arguments, an invetory item
and a list of transations. The function returns an array only containing
the transactions of the specefied invetory item

Input: Two arguments an ID and transaction amout
Output: an array with those values

Explicit Requirements:
- Return an array with only those transactions

Implicit Requirements:


E:

transactionsFor(101, transactions);

returns

[ { id: 101, movement: "in",  quantity:  5 },
  { id: 101, movement: "in",  quantity: 12 },
  { id: 101, movement: "out", quantity: 18 }, ]

D: Arrays

A:

- Write the transactionsFor function()
  - Iterate through the array with the .map method
  - use item all the callback function
  - item the item.id === 101
  - return item;
*/

// SOLVED WITH THE USE OF THE FILTER METHOD:

// function transactionsFor(id, transactions) {

//   return transactions.filter(item => item.id === id);
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 20 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];


// console.log(transactionsFor(101, transactions));

/*
- Write the transactionsFor function with two args (itemID, transactions)
- declare an empty array variable
  - iterate through the transactions array
  - delclare a variable and initailze it to transactions[index];
  - declare a varoable and assign it to the variable above.id
If the id === 101
- push the varoable to the empty array

*/

// SOLVED WITH THE USE OF FOR LOOPS

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemID, transactions) {
  let resultArray = [];

  for (let index = 0; index < transactions.length; index += 1) {
    let element = transactions[index];
    let elementID = element.id;

    if (elementID === itemID) {
      resultArray.push(element);
    }
  }
  return resultArray;
}


console.log(transactionsFor(101, transactions));