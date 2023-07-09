const mapCanvas = document.querySelector("#map-canvas");

const renderInfoBlock = (arg) => {
	// const resObjectsArr = Array.from({ length: 10 }, createObject);
	console.log(arg);

	const cardTemplate = document
		.querySelector("#card")
		.content.querySelector(".popup");

	arg.forEach((object, i) => {
		const popupCard = cardTemplate.cloneNode(true);
		popupCard.querySelector(".popup__title").textContent = object.offer.title;
		if (object.offer.address) {
			popupCard.querySelector(".popup__text--address").textContent =
				object.offer.address;
		} else {
			popupCard.querySelector(".popup__text--address").remove();
		}
		popupCard.querySelector(
			".popup__text--price"
		).textContent = `${object.offer.price} ₽/ ночь`;
		popupCard.querySelector(
			".popup__text--capacity"
		).textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
		popupCard.querySelector(
			".popup__text--time"
		).textContent = `Заезд после ${object.offer.checkin},выезд до ${object.offer.checkout}`;

		const featuresListArray = object.offer.features;
		console.log(featuresListArray);
		const featuresList = popupCard.querySelector(".popup__features");
		console.log(featuresList);
		const featuresListItem = featuresList.querySelector("li");
		featuresList.innerHTML = "";
		for (let i = 0; i < featuresListArray.length; i++) {
			const newFeaturesListItem = featuresListItem.cloneNode(true);
			newFeaturesListItem.className = `popup__feature popup__feature--${featuresListArray[i]}`;
			newFeaturesListItem.textContent = featuresListArray[i];
			featuresList.append(newFeaturesListItem);
		}

		console.log(featuresListItem);

		popupCard.querySelector(".popup__description").textContent =
			object.offer.description;
		popupCard.querySelector(".popup__avatar").textContent = object.autor.avatar;

		const photoList = popupCard.querySelector(".popup__photos");
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
		objectFragment.appendChild(popupCard);
		mapCanvas.appendChild(objectFragment);
		mapCanvas.style.display = "flex";
	});
};

export { renderInfoBlock };
