let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const typeHousings = ["palace", "flat", "house", "bungalow", "hotel"];
const randomText = [
	"произвольный заголовок",
	"Произвольный текст",
	"Lorem ipsum",
];
const houseFeatures = [
	"wifi",
	"dishwasher",
	"parking",
	"washer",
	"elevator",
	"conditioner",
];
const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7; //
const LNG_MAX = 139.8;
const checkInOutData = ["12:00", "13:00", "14:00"];
const photos = [
	"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
	"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
	"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

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
	const randomFeaturesNumber = getRandomNumber(0, array.length - 1);
	return array.slice(0, randomFeaturesNumber);
};

const getRandomArrNumber = () => {
	let randomNum = getRandomNumber(0, numbers.length - 1);
	let randomNumberValue = numbers[randomNum];
	if (randomNumberValue < 10) {
		randomNum = "0" + randomNumberValue;
	}
	numbers = numbers.filter((item) => item !== randomNumberValue);
	return randomNumberValue;
};

const createObject = () => ({
	autor: {
		avatar: `img/avatars/user${getRandomArrNumber()}.png`,
	},
	offer: {
		title: getRandomArrayValue(randomText),
		address:
			`${getRandomNumber(LAT_MIN, LAT_MAX, true)}` +
			" " +
			`${getRandomNumber(LNG_MIN, LNG_MAX, true)}`,
		price: getRandomNumber(0, 100),
		type: getRandomArrayValue(typeHousings),
		rooms: getRandomNumber(1, 5),
		guests: getRandomNumber(0, 6),
		checkin: getRandomArrayValue(checkInOutData),
		checkout: getRandomArrayValue(checkInOutData),
		features: getNoRepeatArrayValue(houseFeatures),
		description: getRandomArrayValue(randomText),
		photos: getNoRepeatArrayValue(photos),
	},
	location: {
		lat: getRandomNumber(LAT_MIN, LAT_MAX, true),
		lng: getRandomNumber(LNG_MIN, LNG_MAX, true),
	},
});

const resObjectsArr = Array.from({ length: 10 }, createObject);
console.log(resObjectsArr);
