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


//'return positive numbers';

function returnNumbers(string) {
  let number = string.split(' ').map(item => parseInt(item)).filter(item => !isNaN(item));
  let [outputNumber] = number;
  if(!outputNumber) {
    return NaN;
  } else {
    return Math.abs(outputNumber);
  }
}

console.log(returnNumbers('2023 год'));            // 2023
console.log(returnNumbers('ECMAScript 2022'));     // 2022
console.log(returnNumbers('агент 007'));           // 7
console.log(returnNumbers('-7'));                  // 7
console.log(returnNumbers('а я томат'));           // NaN

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
