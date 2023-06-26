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

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumberLatLng = (min, max) => {
	let res = Math.random() * (max - min) + min;
	res = res.toFixed(5);
	return parseFloat(res);
};

const randomArrayValue = (array) => {
	const randomValue = randomNumber(0, array.length - 1);
	return array[randomValue];
};

const randomNoRepeatArrayValue = (array) => {
	const randomFeaturesNumber = randomNumber(0, array.length - 1);
	let updatedArray = [];
	for (let i = randomFeaturesNumber; i >= 0; i--) {
		updatedArray.push(array[i]);
	}
	return updatedArray;
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
		features: randomNoRepeatArrayValue(houseFeatures),
		description: "Произвольный текст",
		photos: randomNoRepeatArrayValue(photos),
	},
	location: {
		lat: randomNumberLatLng(LAT_MIN, LAT_MAX),
		lng: randomNumberLatLng(lngMin, lngMax),
	},
});

const resObjectsArr = Array.from({ length: 10 }, createObject);
