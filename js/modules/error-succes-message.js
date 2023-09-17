const body = document.querySelector("body");
const templateSuccess = document
	.querySelector("#success")
	.content.querySelector(".success");

const templateError = document
	.querySelector("#error")
	.content.querySelector(".error");
let cloneElement;

//Нажатие на кнопку "Escape".
const escapeKey = (evt) => evt.key === "Escape";

//Удаляем блок на нажатие 'Esc'
function closeEsc(evt) {
	if (escapeKey(evt)) {
		cloneElement.remove();
		document.removeEventListener("keydown", closeEsc);
	}
}

const showSuccess = () => {
	cloneElement = templateSuccess.cloneNode(true);

	body.append(cloneElement);

	document.addEventListener("keydown", closeEsc);

	const cloneElementRemoveHandler = () => {
		if (cloneElement) {
			cloneElement.remove();
			document.removeEventListener("keydown", closeEsc);
		}
	};

	cloneElement.addEventListener("click", cloneElementRemoveHandler);
};
const showError = () => {
	cloneElement = templateError.cloneNode(true);
	const errorButton = cloneElement.querySelector(".error__button");

	body.append(cloneElement);

	const clickOutside = (evt) => {
		if (
			evt.target.closest(".error") ||
			evt.target === errorButton ||
			evt.target.closest(".success")
		) {
			cloneElement.remove();
			document.removeEventListener("keydown", closeEsc);
			document.removeEventListener("click", clickOutside);
		}
	};

	cloneElement.addEventListener("keydown", closeEsc);
	cloneElement.addEventListener("click", clickOutside);
};

export { showSuccess, showError };
