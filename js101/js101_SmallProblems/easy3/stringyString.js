function stringy(num) {
  let stringyNum = `${"10".repeat(num.length)}`;

  return stringyNum;
}


console.log(stringy(6));    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"