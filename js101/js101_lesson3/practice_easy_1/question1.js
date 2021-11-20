// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Answer: The code will not raise an error
// It will create 2 emplty slots and in index 6 is will add in the number 5

// Bonus:

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// Answer: The index at slot 4 in empty so it will return undefined 
// event though it doesnt have undefiend assigned to it