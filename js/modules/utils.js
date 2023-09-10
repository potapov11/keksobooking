import { mainPinMarker, startCoordinate, cityCenter } from "./create-map.js";

const typeRoomsPrices = {
	bungalow: 0,
	flat: 1000,
	hotel: 3000,
	house: 5000,
	palace: 10000,
};

const filterHousingTypes = document.querySelectorAll(".map__filter");

const checkType = (arg) => {
	let type;
	switch (arg) {
		case "palace":
			type = "Дворец";
			break;
		case "flat":
			type = "Квартира";
			break;
		case "house":
			type = "Дом";
			break;
		case "bungalow":
			type = "Бунгало";
			break;
		case "hotel":
			type = "Отель";
			break;
	}
	return type;
};

const debounce = (callback, timer) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => callback.apply(this, args), timer);
	};
};

//fixed
const cleansFilterForm = () => {
	const selectedFeatures = Array.from(
		document.querySelectorAll(
			'#housing-features input[type="checkbox"]:checked'
		)
	);
	selectedFeatures.forEach((feature) => {
		feature.checked = false;
	});
	filterHousingTypes.forEach((housingType) => {
		housingType.value = "any";
	});
};

const returnsMarker = () => {
	mainPinMarker.setLatLng(startCoordinate);
};

const setAddressPlaceholder = () => {
	const adressInput = document.querySelector("#address");
	adressInput.placeholder = "привет";
};
//

export {
	checkType,
	typeRoomsPrices,
	debounce,
	cleansFilterForm,
	returnsMarker,
	setAddressPlaceholder,
};
