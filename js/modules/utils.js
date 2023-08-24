const typeRoomsPrices = {
	bungalow: 0,
	flat: 1000,
	hotel: 3000,
	house: 5000,
	palace: 10000,
};

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

export { checkType, typeRoomsPrices };
