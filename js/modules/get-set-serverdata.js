const getData = () => {
	return fetch("https://28.javascript.pages.academy/keksobooking/data").then(
		(response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Ошибка HTTP: ${response.status}`);
			}
		}
	);
};

const setData = (data, form, success, error) => {
	fetch("https://28.javascript.pages.academy/keksobookin", {
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
			form.reset();
			success();
		})
		.catch(() => {
			error();
		});
};

export { getData, setData };
