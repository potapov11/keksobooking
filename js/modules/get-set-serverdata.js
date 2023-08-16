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

export { getData };
