'Палиндром';

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

// let string = 'А роза упала на лару Азора';
// string = 
// console.log(string);
