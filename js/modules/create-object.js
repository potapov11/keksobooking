import {
	getRandomNumber,
	getRandomArrayValue,
	getNoRepeatArrayValue,
	getRandomArrNumber,
} from "./utils.js";

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
	"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
	"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
	"https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

getRandomNumber(LAT_MIN, LAT_MAX, true);

const createObject = () => {
	const objOneRandomFloatNumber = getRandomNumber(LAT_MIN, LAT_MAX, true);
	const objTwoRandomFloatNumber = getRandomNumber(LNG_MIN, LNG_MAX, true);

	return {
		autor: {
			avatar: `img/avatars/user${getRandomArrNumber(numbers)}.png`,
		},
		offer: {
			title: getRandomArrayValue(randomText),
			address: `${objOneRandomFloatNumber}  ${objTwoRandomFloatNumber}`,
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
			lat: objOneRandomFloatNumber,
			lng: objTwoRandomFloatNumber,
		},
	};
};

export { createObject };
