let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const typeHousings = ["palace", "flat", "house", "bungalow", "hotel"];
const houseFeatures = [
	"wifi",
	"dishwasher",
	"parking",
	"washer",
	"elevator",
	"conditioner",
];
const checkInOutData = ["12:00", "13:00", "14:00"];

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomArrayValue = (array) => {
	const randomValue = randomNumber(0, array.length - 1);
	return array[randomValue];
};

const randomFeaturesValue = (array) => {
	const randomFeaturesNumber = randomNumber(0, array.length - 1);
	let updatedFeaturesArray = [];
	for (let i = randomFeaturesNumber; i >= 0; i--) {
		updatedFeaturesArray.push(array[i]);
	}
	console.log(updatedFeaturesArray);
	return updatedFeaturesArray;
};

const RandomArrNumber = () => {
	let randomNum = randomNumber(0, numbers.length - 1);
	let randomNumberValue = numbers[randomNum];
	if (randomNumberValue < 10) {
		randomNum = "0" + randomNumberValue;
	}
	numbers = numbers.filter((item) => item !== randomNumberValue);
	return randomNumberValue;
};

const createObject = () => ({
	autor: {
		avatar: `img/avatars/user${RandomArrNumber()}.png`,
	},
	offer: {
		title: "Произвольный текст",
		address: "Произвольный текст",
		price: randomNumber(0, 100),
		type: randomArrayValue(typeHousings),
		rooms: randomNumber(0, 5),
		guests: randomNumber(0, 6),
		checkin: randomArrayValue(checkInOutData),
		checkout: randomArrayValue(checkInOutData),
		features: randomFeaturesValue(houseFeatures),
	},
});

const resArr = Array.from({ length: 10 }, createObject);
console.log(resArr);
console.log(createObject());
