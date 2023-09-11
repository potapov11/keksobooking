const templateSuccess = document
	.querySelector("#success")
	.content.querySelector(".success");
let cloneElement;
const body = document.querySelector("body");
const templateError = document
	.querySelector("#error")
	.content.querySelector(".error");

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
	//очищаем поля форм

	document.addEventListener("keydown", closeEsc);
	cloneElement.addEventListener("click", () => {
		//проверяем если елемент есть - удаляем
		if (cloneElement) {
			cloneElement.remove();
			document.removeEventListener("keydown", closeEsc);
		}
	});
};

const showError = () => {
	cloneElement = templateError.cloneNode(true);
	const errorButton = cloneElement.querySelector(".error__button");

	body.append(cloneElement);

	const closeEsc = (evt) => {
		if (evt.key === "Escape") {
			cloneElement.remove();
			document.removeEventListener("keydown", closeEsc);
			document.removeEventListener("click", clickOutside);
		}
	};

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

	document.addEventListener("keydown", closeEsc);
	document.addEventListener("click", clickOutside);
};

export { showSuccess, showError };
