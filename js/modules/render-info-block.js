import { checkType } from "./utils.js";

const renderInfoBlock = (object) => {
	const cardTemplate = document
		.querySelector("#card")
		.content.querySelector(".popup");

	const popupCard = cardTemplate.cloneNode(true);
	if (object?.offer?.title) {
		popupCard.querySelector(".popup__title").textContent = object.offer.title;
	} else {
		popupCard.querySelector(".popup__title").remove();
	}

	if (object?.offer?.address) {
		popupCard.querySelector(".popup__text--address").textContent =
			object.offer.address;
	} else {
		popupCard.querySelector(".popup__text--address").remove();
	}

	if (object?.offer?.price) {
		popupCard.querySelector(
			".popup__text--price"
		).textContent = `${object.offer.price} ₽/ ночь`;
	} else {
		popupCard.querySelector(".popup__text--price").remove();
	}

	if (object?.offer?.type) {
		const type = checkType(object.offer.type);
		popupCard.querySelector(".popup__type").textContent = type;
	} else {
		popupCard.querySelector(".popup__type").remove();
	}

	if (object?.offer?.rooms && object?.offer?.guests) {
		popupCard.querySelector(
			".popup__text--capacity"
		).textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
	} else {
		popupCard.querySelector(".popup__text--capacity").remove();
	}

	if (object?.offer?.checkin && object?.offer?.checkout) {
		popupCard.querySelector(
			".popup__text--time"
		).textContent = `Заезд после ${object.offer.checkin},выезд до ${object.offer.checkout}`;
	} else {
		popupCard.querySelector(".popup__text--time").remove();
	}

	if (object?.offer?.features) {
		const featuresListArray = object.offer.features;
		const featuresList = popupCard.querySelector(".popup__features");
		const featuresListItem = featuresList.querySelector("li");
		featuresList.innerHTML = "";
		for (let i = 0; i < featuresListArray.length; i++) {
			const newFeaturesListItem = featuresListItem.cloneNode(true);
			newFeaturesListItem.className = `popup__feature popup__feature--${featuresListArray[i]}`;
			newFeaturesListItem.textContent = featuresListArray[i];
			featuresList.append(newFeaturesListItem);
		}
	} else {
		popupCard.querySelector(".popup__features").remove();
	}

	if (object?.offer?.description) {
		popupCard.querySelector(".popup__description").textContent =
			object.offer.description;
	} else {
		popupCard.querySelector(".popup__description").remove();
	}

	if (object?.offer?.photos) {
		const photoList = popupCard.querySelector(".popup__photos");
		const photos = object.offer.photos;
		const img = photoList.querySelector("img");

		photoList.innerHTML = "";
		for (let i = 0; i < photos.length; i++) {
			let newImg = img.cloneNode(true);
			newImg.src = photos[i];
			photoList.append(newImg);
		}
	} else {
		popupCard.querySelector(".popup__photos").remove();
	}

	if (object?.author?.avatar) {
		popupCard.querySelector(".popup__avatar").src = object.author.avatar;
	} else {
		popupCard.querySelector(".popup__avatar").remove();
	}

	const objectFragment = document.createDocumentFragment();
	objectFragment.appendChild(popupCard);
	return popupCard;
};

export { renderInfoBlock };
