const createSlider = () => {
	const sliderElement = document.querySelector(".ad-form__slider");
	const selectField = document.querySelector('[name="type"]');
	console.log(selectField);
	console.log(sliderElement);
	const idPrice = document.querySelector("#price");
	console.log(idPrice.value);
	const maxPrice = 100000;
	const typeRoomsPrices = {
		bungalow: 0,
		flat: 1000,
		hotel: 3000,
		house: 5000,
		palace: 10000,
	};

	// idPrice.value = Number(idPrice.placeholder);

	noUiSlider.create(sliderElement, {
		range: {
			min: 0,
			max: 100000,
		},
		start: Number(idPrice.placeholder),
		step: 1,
		connect: "lower",
	});

	sliderElement.noUiSlider.on("update", () => {
		idPrice.value = sliderElement.noUiSlider.get();
	});

	//Обработчик события на замену
	selectField.addEventListener("change", (evt) => {
		if (evt.target) {
			const valuePrice = evt.target.value;
			sliderElement.noUiSlider.updateOptions({
				range: {
					min: typeRoomsPrices.valuePrice,
					max: 50000,
				},
				step: 0.1,
			});
			console.log(evt.target.value);
		} else {
			sliderElement.noUiSlider.updateOptions({
				range: {
					min: 0,
					max: 100,
				},
				step: 1,
			});
		}
	});
};

export { createSlider };
