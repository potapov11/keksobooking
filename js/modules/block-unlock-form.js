const filters = document.querySelector(".map__filters");
const form = document.querySelector(".ad-form");
const fieldsets = form.querySelectorAll("fieldset");

const blockForm = () => {
	form.classList.add("ad-form--disabled");
	filters.classList.add("ad-form--disabled");
	fieldsets.forEach((item) => {
		item.setAttribute("disabled", "");
	});
	for (let i = 0; i < filters.children.length; i++) {
		filters.children[i].setAttribute("disabled", "");
	}
};

const unlockForm = () => {
	form.classList.remove("ad-form--disabled");
	fieldsets.forEach((item) => {
		item.removeAttribute("disabled");
	});
	for (let i = 0; i < filters.children.length; i++) {
		filters.children[i].removeAttribute("disabled");
	}
};

const unlockFilters = () => {
	filters.classList.remove("ad-form--disabled");
};

export { blockForm, unlockForm, unlockFilters };
