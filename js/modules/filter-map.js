const filterMap = () => {
	const form = document.querySelector(".map__filters");
	const housePrices = {
		low: {
			from: 0,
			to: 10000,
		},

		middle: {
			from: 10000,
			to: 50000,
		},

		high: {
			from: 50000,
			to: 100000,
		},
	};

	//обработчик события на изменения в фильтрах
	form.addEventListener("change", function (evt) {
		console.log(evt.target.value);
	});
};

export { filterMap };
