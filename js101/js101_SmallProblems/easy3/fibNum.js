function findFibonacciIndexByLength(string) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < string);

  return count;
}

console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
