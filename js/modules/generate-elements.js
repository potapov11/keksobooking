import { createObject } from "./create-object.js";

const createElements = () => {
	const resObjectsArr = Array.from({ length: 10 }, createObject);
	const mapCanvas = document.querySelector("#map-canvas");
	console.log(resObjectsArr);

	const cardTemplate = document
		.querySelector("#card")
		.content.querySelector(".popup");

	resObjectsArr.forEach((object, i) => {
		const objectElement = cardTemplate.cloneNode(true);
		objectElement.querySelector(".popup__title").textContent =
			object.offer.title;
		objectElement.querySelector(".popup__text--address").textContent =
			object.offer.address;
		objectElement.querySelector(
			".popup__text--price"
		).textContent = `${object.offer.price} ₽/ ночь`;
		objectElement.querySelector(
			".popup__text--capacity"
		).textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
		objectElement.querySelector(
			".popup__text--time"
		).textContent = `Заезд после ${object.offer.checkin},выезд до ${object.offer.checkout}`;
		objectElement.querySelector(".popup__features").textContent =
			object.offer.features;
		objectElement.querySelector(".popup__description").textContent =
			object.offer.description;
		objectElement.querySelector(".popup__avatar").textContent =
			object.autor.avatar;

		const photoList = objectElement.querySelector(".popup__photos");
		console.log(photoList);
		const photos = object.offer.photos;
		const img = photoList.querySelector("img");

		photoList.innerHTML = "";
		for (let i = 0; i < photos.length; i++) {
			let newImg = img.cloneNode(true);
			newImg.src = photos[i];
			photoList.append(newImg);
		}

		const objectFragment = document.createDocumentFragment();
		objectFragment.appendChild(objectElement);
		mapCanvas.appendChild(objectFragment);
		mapCanvas.style.display = "flex";

		const popupElement = document.querySelector(".popup");

		const elements = popupElement.querySelectorAll("*");
		elements.forEach((element) => {
			const data = element.textContent || element.getAttribute("src");
			if (data === "") {
				element.remove();
			}
		});
	});
};

export { createElements };
