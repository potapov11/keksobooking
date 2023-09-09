const getData = (showError) => {
	return fetch("https://28.javascript.pages.academy/keksobooking/data")
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Ошибка HTTP: ${response.status}`);
			}
		})
		.catch(() => {
			showError();
		});
};

const sendData = (data, success, error) => {
	fetch("https://28.javascript.pages.academy/keksobooking", {
		method: "POST",
		body: data,
		type: "multipart/form-data",
	})
		.then((response) => {
			if (response.ok) {
				console.log(response.ok);
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
