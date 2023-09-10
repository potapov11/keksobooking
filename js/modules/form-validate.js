import { typeRoomsPrices, cleansFilterForm, returnsMarker } from "./utils.js";
import { showSuccess, showError } from "./error-succes-message.js";
import { sendData } from "./get-set-serverdata.js";
import { getData } from "./get-set-serverdata.js";
import { renderPins, cityCenter, setAddressInput } from "./create-map.js";
import { setAddressPlaceholder } from "./utils.js";

const formValidate = (data) => {
	const form = document.querySelector(".ad-form");
	const roomsElement = form.querySelector('[name="rooms"]');
	const capacityElement = form.querySelector('[name="capacity"]');
	const typeElement = form.querySelector('[name="type"]');
	const price = form.querySelector("#price");
	const title = form.querySelector("#title");
	const timein = form.querySelector("#timein");
	const timeout = form.querySelector("#timeout");
	const address = form.querySelector("#address");
	const formReset = form.querySelector(".ad-form__reset");
	const formBtnSend = form.querySelector(".ad-form__submit");

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

	const validateAddress = () => {
		if (address.value) {
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

	pristine.addValidator(address, validateAddress, "Пожалуйста заполните адрес");

	capacityElement.addEventListener("change", () => {
		pristine.validate(roomsElement);
	});

	price.addEventListener("change", () => {
		pristine.validate();
	});

	form.addEventListener("submit", (evt) => {
		evt.preventDefault();
		const valid = pristine.validate();
		if (valid) {
			formBtnSend.setAttribute("disabled", "true");
			const formData = new FormData(evt.target);
			sendData(
				formData,
				() => {
					showSuccess();
					formBtnSend.removeAttribute("disabled");
					form.reset();
					cleansFilterForm();
					returnsMarker();
					setAddressInput();
				},
				showError
			);
		}
	});

	// formReset.addEventListener("reset", function () {
	// 	pristine.reset();
	// });

	formReset.addEventListener("click", function () {
		cleansFilterForm();
		returnsMarker();
		const data = getData();
		data.then((data) => {
			renderPins(data);
		});
		pristine.reset();
	});

	formReset.removeEventListener("click", function () {
		cleansFilterForm();
		returnsMarker();
		renderPins(data);
		pristine.reset();
	});
};

export { formValidate };
