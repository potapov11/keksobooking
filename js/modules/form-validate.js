import { typeRoomsPrices, cleansFilterForm, returnsMarker } from "./utils.js";
import { showSuccess, showError } from "./error-succes-message.js";
import { sendData } from "./get-set-server-data.js";
import { getData } from "./get-set-server-data.js";
import { renderPins, cityCenter } from "./create-map.js";
import { initImageShow } from "./images-checking.js";
import { resetSlider } from "./create-slider.js";

const MAX_PRICE = 100000;
console.log(MAX_PRICE);
const ROOM_GUESTS = {
	1: ["1"],
	2: ["1", "2"],
	3: ["1", "2", "3"],
	100: ["0"],
};
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
const avatarImage = form.querySelector(".ad-form-header__input");
const avatarPreviewImage = form.querySelector(".ad-form-header__preview img");
const housingPhotoImage = form.querySelector("#images");
const housingPreviewImage = form.querySelector(".ad-form__photo");

const resetAvatar = initImageShow(avatarImage, avatarPreviewImage);
const resetHouseImage = initImageShow(housingPhotoImage, housingPreviewImage);

const validatesForm = () => {
	const setInputHandler = (timeElementIn, timeElementOut) => {
		const timeElementOutValueHandler = () => {
			timeElementOut.value = timeElementIn.value;
		};
		timeElementIn.addEventListener("change", timeElementOutValueHandler);
	};

	setInputHandler(timein, timeout);
	setInputHandler(timeout, timein);

	const setAttributeMin = () => {
		price.placeholder = typeRoomsPrices[typeElement.value];
	};
	setAttributeMin();

	const pristine = new Pristine(form, {
		classTo: "ad-form__element",
		errorClass: "ad-form__element--invalid",
		errorTextParent: "ad-form__element",
		errorTextTag: "span",
	});

	const typeElementAddFunctionHandler = () => {
		setAttributeMin();
		pristine.validate();
	};

	typeElement.addEventListener("change", typeElementAddFunctionHandler);

	//валидирует цену
	const validPriceMessage = () => {
		if (Number(price.value) >= MAX_PRICE) {
			return `Максимальная цена ${MAX_PRICE}`;
		} else {
			return `Минимальная цена ${price.placeholder}`;
		}
	};

	const validateTitle = (value) => {
		return value.length >= 30 && value.length <= 100;
	};

	const validatePrice = (value) => {
		return (
			Number(value) >= Number(price.placeholder) && Number(value) <= 100000
		);
	};

	const validateRooms = () => {
		if (ROOM_GUESTS[roomsElement.value].includes(capacityElement.value)) {
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

	const addPristineValidateHandler = (elem) => {
		pristine.validate(elem);
	};

	capacityElement.addEventListener(
		"change",
		addPristineValidateHandler(roomsElement)
	);

	price.addEventListener("input", addPristineValidateHandler);

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
					setAttributeMin();
					resetSlider();
					resetHouseImage();
					resetAvatar();
					getData().then((data) => {
						renderPins(data);
					});
				},
				() => {
					showError();
					formBtnSend.removeAttribute("disabled");
				}
			);
		}
	});

	const setAddressInput = () => {
		address.value =
			cityCenter.lat.toFixed(5) + ",  " + cityCenter.lng.toFixed(5);
	};

	formReset.addEventListener("click", () => {
		form.reset();
		setAddressInput();
		cleansFilterForm();
		returnsMarker();
		getData().then((data) => {
			renderPins(data);
		});
		setAttributeMin();
		resetAvatar();
		resetHouseImage();
		resetSlider();
		pristine.reset();

		setTimeout(function () {
			setAddressInput();
		}, 500);
	});
};

export { validatesForm };
