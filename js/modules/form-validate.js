const formValidate = () => {
	const form = document.querySelector(".ad-form");
	const roomsElement = form.querySelector('[name="rooms"]');
	const capacityElement = form.querySelector('[name="capacity"]');
	const typeElement = form.querySelector('[name="type"]');
	const price = form.querySelector("#price");
	const title = form.querySelector("#title");

	const RoomGuests = {
		1: ["1"],
		2: ["1", "2"],
		3: ["1", "2", "3"],
		100: ["0"],
	};

	const typeRoomsPrices = {
		bungalow: 0,
		flat: 1000,
		hotel: 3000,
		house: 5000,
		palace: 10000,
	};

	const pristine = new Pristine(form, {
		classTo: "ad-form__element",
		errorClass: "ad-form__element--invalid",
		errorTextParent: "ad-form__element",
		errorTextTag: "span",
	});

	const validateTitle = (value) => {
		return value.length >= 30 && value.length <= 100;
	};
	const validatePrice = (value) => {
		return value >= 1 && value <= 100000;
	};
	const validateRooms = () => {
		if (RoomGuests[roomsElement.value].includes(capacityElement.value)) {
			return true;
		} else {
			return false;
		}
	};
	const validMessage = () => {
		const value = roomsElement.value;

		if (value === "1") {
			console.log(value);
			return `Эта комната для ${value} гостя`;
		} else if (value === "100") {
			return `Эти комнаты не для гостей`;
		} else {
			return `Эта комната для ${value} гостей`;
		}
	};

	pristine.addValidator(title, validateTitle, "От 30 до 100 символов");

	pristine.addValidator(price, validatePrice, "Максимальное значение — 100000");

	pristine.addValidator(roomsElement, validateRooms, validMessage);

	capacityElement.addEventListener("change", () => {
		pristine.validate(roomsElement);
	});

	typeElement.addEventListener("change", function () {
		console.log(typeElement.value);
		price.placeholder = typeRoomsPrices[typeElement.value];
	});

	form.addEventListener("submit", (evt) => {
		evt.preventDefault();
		pristine.validate();
	});
};

export { formValidate };
