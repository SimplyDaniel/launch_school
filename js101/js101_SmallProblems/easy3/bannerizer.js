function logInBox(string) {
  let horizontalLines = `+${"-".repeat(string.length + 2)}`;
  let verticalLines = `|${" ".repeat(string.length + 2)}|`;

  console.log(horizontalLines);
  console.log(verticalLines);
  console.log(`| ${string} |`);
  console.log(horizontalLines);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
