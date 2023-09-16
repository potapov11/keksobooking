import { typeRoomsPrices } from "./utils.js";

const sliderElement = document.querySelector(".ad-form__slider");
const priceElement = document.querySelector("#price");
const typeElement = document.querySelector("[name='type']");
const MAX_PRICE = 100000;
const MIN_PRICE = 0;
const STEP_NUMBER = 1;

const priceChangeHandler = (evt) => {
	sliderElement.noUiSlider.updateOptions({
		range: {
			min: MIN_PRICE,
			max: MAX_PRICE,
		},
		start: +priceElement.value,
		step: STEP_NUMBER,
	});

	const changePrice = () => {
		priceElement.value = typeRoomsPrices[typeElement.value];
	};
	changePrice();
};

const createSlider = () => {
	noUiSlider.create(sliderElement, {
		range: {
			min: typeRoomsPrices.flat,
			max: MAX_PRICE,
		},
		start: 0,
		step: STEP_NUMBER,
		connect: "lower",
		format: {
			to: function (value) {
				if (Number.isInteger(value)) {
					return value.toFixed(0);
				}
				return value.toFixed(0);
			},
			from: function (value) {
				return parseFloat(value);
			},
		},
	});

	// document.querySelector(".noUi-handle").addEventListener("mousedown", () => {
	// priceElement.value = 0;
	// sliderElement.noUiSlider.on("update", () => {
	// 	priceElement.value = sliderElement.noUiSlider.get();
	// });
	// });

	const sliderMouseDown = () => {
		priceElement.value = 0;
		sliderElement.noUiSlider.on("update", () => {
			priceElement.value = sliderElement.noUiSlider.get();
		});
		document
			.querySelector(".noUi-handle")
			.removeEventListener("mousedown", sliderMouseDown);
	};

	document
		.querySelector(".noUi-handle")
		.addEventListener("mousedown", sliderMouseDown);

	if (!priceElement) {
		typeElement.addEventListener("change", priceChangeHandler);
	}
};

const resetSlider = () => {
	sliderElement.noUiSlider.reset();
};

export { createSlider, sliderElement, resetSlider };
