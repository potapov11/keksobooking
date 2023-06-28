//'Палиндром';

function checkPalindrome(string) {
	const newString = string
		.toLowerCase()
		.replaceAll(" ", "")
		.split("")
		.reverse()
		.join("");
	string = string.toLowerCase().replaceAll(" ", "");
	return string === newString;
}

console.log(checkPalindrome("А роза упала на лапу Азора"));
console.log(checkPalindrome("Сегодня жарко"));
console.log(checkPalindrome("Шалаш"));

//return number function

function returnNumbers(string) {
	let numbers = "";
	for (let i in string) {
		let num = parseInt(string[i]);
		if (!Number.isNaN(num)) {
			numbers += num;
		}
	}
	if (numbers.length === 0) {
		return NaN;
	}
	numbers = parseInt(numbers);
	return numbers;
}

console.log(returnNumbers("агент 007")); // 7
console.log(returnNumbers("2023 год")); // 2023
console.log(returnNumbers("ECMAScript 2022")); // 2022
console.log(returnNumbers("1 кефир, 0.5 батона")); // 105
console.log(returnNumbers("-7")); // 7
console.log(returnNumbers("а я томат")); // NaN

// function addChars

function addChars(str, minLength, charsToAdd) {
	if (str.length >= minLength) {
		return str;
	}
	let string = str;
	while (string.length < minLength) {
		string = charsToAdd.slice(0, minLength - string.length) + string;
	}
	return string;
}
console.log(addChars("q", 4, "we")); //wweq
console.log(addChars("q", 4, "werty"));
console.log(addChars("q", 4, "wertjhhjk"));
console.log(addChars("q", 4, "jhhjk"));

//create random number

function randomNumber(min, max, quantity) {
	let num = Math.random() * (max - min + 1) + min;
	return +num.toFixed(quantity);
}

console.log(randomNumber(1, 10, 5));
console.log(randomNumber(1, 6, 3));
console.log(randomNumber(1, 6, 2));
