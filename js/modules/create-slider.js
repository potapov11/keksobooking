const sliderElement = document.querySelector(".ad-form__slider");
const valuePrice = document.querySelector("#price");
const MAX_PRICE = 100000;
const typeRoomsPrices = {
	bungalow: 0,
	flat: 1000,
	hotel: 3000,
	house: 5000,
	palace: 10000,
};

const createSlider = () => {
	noUiSlider.create(sliderElement, {
		range: {
			min: typeRoomsPrices.flat,
			max: MAX_PRICE,
		},
		start: 0,
		step: 1000,
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
		valuePrice.value = sliderElement.noUiSlider.get();
	});
};

export { createSlider };
