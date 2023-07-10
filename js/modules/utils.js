let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getRandomNumber = (min, max, floatingNumber) => {
	if (floatingNumber) {
		let res = Math.random() * (max - min) + min;
		res = res.toFixed(5);
		return parseFloat(res);
	} else {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};

const getRandomArrayValue = (array) => {
	const randomValue = getRandomNumber(0, array.length - 1);
	return array[randomValue];
};

const getNoRepeatArrayValue = (array) => {
	const randomFeaturesNumber = getRandomNumber(1, array.length);
	return array.slice(0, randomFeaturesNumber);
};

const getRandomArrNumber = (array) => {
	let randomNum = getRandomNumber(0, array.length - 1);
	let randomNumberValue = array[randomNum];

	if (randomNumberValue < 10) {
		numbers = array.filter((item) => {
			return item !== randomNumberValue;
		});
		return (randomNum = "0" + randomNumberValue);
	} else {
		numbers = array.filter((item) => {
			return item !== randomNumberValue;
		});
		return randomNumberValue;
	}
};

export {
	getRandomNumber,
	getRandomArrayValue,
	getNoRepeatArrayValue,
	getRandomArrNumber,
	numbers,
};
