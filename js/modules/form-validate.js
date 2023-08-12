const formValidate = () => {
	const form = document.querySelector(".ad-form");
	const roomsElement = form.querySelector('[name="rooms"]');
	const capacityElement = form.querySelector('[name="capacity"]');
	const typeElement = form.querySelector('[name="type"]');
	const price = form.querySelector("#price");
	const title = form.querySelector("#title");
	const timein = form.querySelector("#timein");
	const timeout = form.querySelector("#timeout");

	const typeRoomsPrices = {
		bungalow: 0,
		flat: 1000,
		hotel: 3000,
		house: 5000,
		palace: 10000,
	};

	const setInputHandler = (timeElementIn, timeElementOut) => {
		timeElementIn.addEventListener("change", function () {
			timeElementOut.value = timeElementIn.value;
		});
	};

	setInputHandler(timein, timeout);
	setInputHandler(timeout, timein);

	const RoomGuests = {
		1: ["1"],
		2: ["1", "2"],
		3: ["1", "2", "3"],
		100: ["0"],
	};

	const maxPrice = 100000;

	const setAttributeMin = () => {
		price.placeholder = typeRoomsPrices[typeElement.value];
		price.min = typeRoomsPrices[typeElement.value];
	};
	setAttributeMin();

	const pristine = new Pristine(form, {
		classTo: "ad-form__element",
		errorClass: "ad-form__element--invalid",
		errorTextParent: "ad-form__element",
		errorTextTag: "span",
	});

	typeElement.addEventListener("change", setAttributeMin);

	//валидирует цену
	const validPriceMessage = () => {
		if (Number(price.value) >= maxPrice) {
			return `Максимальная цена ${maxPrice}`;
		}
		return `Минимальная цена ${price.placeholder}`;
	};

	const validateTitle = (value) => {
		return value.length >= 30 && value.length <= 100;
	};

	const validatePrice = (value) => {
		return Number(value) >= Number(price.min) && Number(value) <= 100000;
	};

	const validateRooms = () => {
		if (RoomGuests[roomsElement.value].includes(capacityElement.value)) {
			return true;
		} else {
			return false;
		}
	};

	const validRoomMessage = () => {
		const value = roomsElement.value;

		if (value === "1") {
			return `Эта комната для ${value} гостя`;
		} else if (value === "100") {
			return `Эти комнаты не для гостей`;
		} else {
			return `Эта комната для ${value} гостей`;
		}
	};

	pristine.addValidator(title, validateTitle, "От 30 до 100 символов");

	pristine.addValidator(price, validatePrice, validPriceMessage);

	pristine.addValidator(roomsElement, validateRooms, validRoomMessage);

	capacityElement.addEventListener("change", () => {
		pristine.validate(roomsElement);
	});

	price.addEventListener("change", () => {
		pristine.validate();
	});

	form.addEventListener("submit", (evt) => {
		evt.preventDefault();
		pristine.validate();
	});
};

export { formValidate };
export const typeRoomsPrices = {
	bungalow: 0,
	flat: 1000,
	hotel: 3000,
	house: 5000,
	palace: 10000,
};
