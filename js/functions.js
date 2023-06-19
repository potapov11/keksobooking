//'Палиндром';

function checkPalindrome(string) {
  const newString = string.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
  string = string.toLowerCase().replaceAll(' ', '');
  if(string === newString) {
    return 'isPalindrome';
  } else {
    return 'isNotPalindrome';
  }
}

console.log(checkPalindrome('А роза упала на лапу Азора'));
console.log(checkPalindrome('Сегодня жарко'));
console.log(checkPalindrome('Шалаш'));

//return number function

function returnNumbers(string) {
  let numbers = '';
  for(let i in string) {
    let num = parseInt(string[i]);
    if(!Number.isNaN(num)) {
      numbers += num;
    }
  }
  if(numbers.length === 0) {
      return NaN;
    }
  return numbers;
}

console.log(returnNumbers('2023 год'));            // 2023
console.log(returnNumbers('ECMAScript 2022'));     // 2022
console.log(returnNumbers('агент 007'));           // 7
console.log(returnNumbers('1 кефир, 0.5 батона')); // 105
console.log(returnNumbers('-7'));                  // 7
console.log(returnNumbers('а я томат'));           // NaN


//return string

function addChars(str, minLength, charsToAdd) {
  console.log(str.length, minLength, charsToAdd.length);
  if (str.length >= minLength) {
    return str;
  }
  let string = str;
  while (string.length < minLength) {
    string = charsToAdd + string;
    console.log(string);
    console.log(string.length);
  }
  return string;
}

console.log(addChars('q', 4, 'werty'));

// console.log(addChars('пр', 8, 'р'));
console.log(addChars('при', 8, 'р'));
console.log(addChars('q', 4, 'werty'));

//'create random number'

function randomNumber(min, max, quantity) {
  let num = (Math.random() * (max - min + 1)) + min;
  console.log(num);
  const string = num.toString();
  const index = string.indexOf('.') + 1;
  num = string.slice(index , quantity + index);
  return num;
}


console.log(randomNumber(1, 10, 5));
console.log(randomNumber(1, 6, 3));
console.log(randomNumber(1, 6, 2));
