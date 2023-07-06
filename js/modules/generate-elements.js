import { createObject } from "./create-object.js";

const createElements = () => {
	const resObjectsArr = Array.from({ length: 10 }, createObject);
	const mapCanvas = document.querySelector("#map-canvas");
	console.log(resObjectsArr);

	const cardTemplate = document
		.querySelector("#card")
		.content.querySelector(".popup");

	console.log(cardTemplate);

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
		objectElement
			.querySelector(".popup__photos")
			.querySelector(".popup__photo").src = object.offer.photos;
		console.log(object.offer.photos + `   ${i}`);

		console.log(objectElement);
		mapCanvas.appendChild(objectElement);
		mapCanvas.style.display = "flex";
	});
};

export { createElements };
