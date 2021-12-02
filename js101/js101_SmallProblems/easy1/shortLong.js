function shortLongShort (str1, str2) {
  if (str1.length < str2.length) {
    console.log(str1 + str2 + str1);
  } else if (str1.length > str2.length) {
    console.log(str2 + str1 + str2);
  }
}

// concat short + long + short

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
