const formValidate = () => {
	const form = document.querySelector(".ad-form");
	const RoomGuests = {
		1: ["1"],
		2: ["1", "2"],
		3: ["1", "2", "3"],
		100: ["0"],
	};

	const roomsElement = form.querySelector('[name="rooms"]');
	const capacityElement = form.querySelector('[name="capacity"]');

	const pristine = new Pristine(form, {
		classTo: "ad-form__element",
		errorClass: "ad-form__element--invalid",
		errorTextParent: "ad-form__element",
		errorTextTag: "span",
	});

	const validateTitle = () => {
		return value.length >= 30 && value.length <= 100;
	};
	const validatePrice = () => {
		return value >= 1 && value <= 100000;
	};
	const validateRooms = () => {
		if (RoomGuests[roomsElement.value].includes(capacityElement.value)) {
			return true;
		} else {
			return false;
		}
	};

	// validateRooms();

	pristine.addValidator(
		form.querySelector("#title"),
		validateTitle,
		"От 30 до 100 символов"
	);

	pristine.addValidator(
		form.querySelector("#price"),
		validatePrice,
		"Максимальное значение — 100000"
	);

	pristine.addValidator(roomsElement, validateRooms, "Неправильно");

	capacityElement.addEventListener("change", () => {
		pristine.validate(roomsElement);
	});

	form.addEventListener("submit", (evt) => {
		evt.preventDefault();
		pristine.validate();
	});
};

export { formValidate };
