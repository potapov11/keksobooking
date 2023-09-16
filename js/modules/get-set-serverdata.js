const GET_DATA = "https://28.javascript.pages.academy/keksobooking/data";
const SET_DATA = "https://28.javascript.pages.academy/keksobooking";

const getData = (showError) => {
	return fetch(GET_DATA)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Ошибка HTTP: ${response.status}`);
			}
		})
		.catch(() => {
			showError();
			document
				.querySelector(".error__button")
				.addEventListener("click", function () {
					getData(showError);
				});
		});
};

const sendData = (data, success, error) => {
	fetch(SET_DATA, {
		method: "POST",
		body: data,
		type: "multipart/form-data",
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Ошибка HTTP: " + response.status);
			}
		})
		.then(() => {
			success();
		})
		.catch(() => {
			error();
		});
};

export { getData, sendData };
