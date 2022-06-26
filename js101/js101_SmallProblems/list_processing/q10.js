/*
P: Write a function that returns TRUE or FALSE. TRUE if the
quantity of the item is greater than 0. False other wise.

Input: Array
Output: Boolean True or False

Explicit Requirements:
- Has to return true or false
- Have to use the transactionsFor() function

Implicit Requirements:

E:

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

D: Arrays

A:

- Write the isItemAvailible function(itemID, transactions)
  - Declare a quanity variable initalize it to 0
  - iterate through the transactions array
  - declare an element variable initailze it to transactions[index];
  - declare a itemMovment variable initalize it to = element.movment
  - declare a itemQuantity variable initalize it to = element.quantity
    - IF item.movement === 'in
      - add to quanity varible
    - ELSE IF item.movement === 'out'
    - decreas quanity amount
  - return quanity > 0 ? true : false;
*/

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

function isItemAvailable(id, transactions) {
  let test = transactionsFor(id, transactions);
  let quanity = 0;


  for (let index = 0; index < test.length; index += 1) {
    let element = test[index];
    let itemMovment = element.movement;
    let itemQuantity = element.quantity;

    if (itemMovment === 'in') {
      quanity += itemQuantity;
    } else {
      quanity -= itemQuantity;
    }
  }
  return quanity > 0;
}

function transactionsFor(id, transactions) {

  return transactions.filter(item => item.id === id);
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true.