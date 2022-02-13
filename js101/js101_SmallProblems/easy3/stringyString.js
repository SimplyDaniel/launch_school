function stringy(num) {
  let result = "";

  for (let idx = 0; idx < num; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
}


console.log(stringy(6));    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"