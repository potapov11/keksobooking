function addChars(str, minLength, charsToAdd) {
  console.log(str.length, minLength, charsToAdd.length);
  if (str.length >= minLength) {
    return str;
  }
  while (str.length + charsToAdd.length <= minLength) {
    let string = '';
    string += charsToAdd + str;
    console.log(string);
    // // charsToAdd = charsToAdd.slice(0, -1); // обрезаем последний символ добавочной строки
  }
  // return charsToAdd.slice(0, minLength - str.length) + str;
}

// console.log(addChars('пр', 8, 'р'));
console.log(addChars('при', 8, 'р'));