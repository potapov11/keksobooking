import { typeRoomsPrices } from "./form-validate.js";

const sliderElement = document.querySelector(".ad-form__slider");
const priceElement = document.querySelector("#price");
const typeElement = document.querySelector("[name='type']");
const MAX_PRICE = 100000;
const stepNumber = 1000;

const createSlider = () => {
	noUiSlider.create(sliderElement, {
		range: {
			min: typeRoomsPrices.flat,
			max: MAX_PRICE,
		},
		start: 0,
		step: stepNumber,
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
	sliderElement.noUiSlider.on("update", () => {
		priceElement.value = sliderElement.noUiSlider.get();
	});

	typeElement.addEventListener("change", (evt) => {
		priceElement.value = "";
		sliderElement.noUiSlider.updateOptions({
			range: {
				min: 0,
				max: MAX_PRICE,
			},
			start: 0,
			step: stepNumber,
		});

		const changePrice = () => {
			priceElement.value = typeRoomsPrices[typeElement.value];
		};
		changePrice();
	});
};

export { createSlider };
