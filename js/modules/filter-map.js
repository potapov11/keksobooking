import { renderInfoBlock } from "./render-info-block.js";
import { icon, map } from "./create-map.js";

const filterMap = (data) => {
	const mapMarkers = document.querySelectorAll(".leaflet-marker-icon");
	mapMarkers.forEach((item) => {
		if (item.classList.length === 3) {
			item.remove();
		}
	});

	//Удаляем открытый попап
	const popupOpened = document.querySelector(".leaflet-popup");
	if (popupOpened) {
		popupOpened.remove();
	}

	//Выбираем все выбранные чекбоксы /
	const selectedFeatures = Array.from(
		document.querySelectorAll(
			'#housing-features input[type="checkbox"]:checked'
		)
	).map((input) => input.value);

	const selectedType = document.querySelector("#housing-type").value;
	const selectedPrice = document.querySelector("#housing-price").value;
	const selectedRooms = document.querySelector("#housing-rooms").value;
	const selectedGuests = document.querySelector("#housing-guests").value;

	let filteredData = data.filter((item) => {
		return (
			(selectedType === "any" || item.offer.type === selectedType) &&
			(selectedPrice === "any" ||
				(selectedPrice === "low" && item.offer.price < 10000) ||
				(selectedPrice === "middle" &&
					item.offer.price >= 10000 &&
					item.offer.price <= 50000) ||
				(selectedPrice === "high" && item.offer.price > 50000)) &&
			(selectedRooms === "any" || item.offer.rooms == selectedRooms) &&
			(selectedGuests === "any" || item.offer.guests == selectedGuests) &&
			(selectedFeatures.length === 0 ||
				(item.offer.features &&
					selectedFeatures.every((feature) =>
						item.offer.features.includes(feature)
					)))
		);
	});

	if (filteredData) {
		if (filteredData.length > 10) {
			filteredData = filteredData.slice(0, 10);
		}
		for (let i = 0; i < filteredData.length; i++) {
			const card = renderInfoBlock(filteredData[i]);
			const lat = filteredData[i].location.lat;
			const lng = filteredData[i].location.lng;
			const marker = L.marker(
				{
					lat,
					lng,
				},
				{
					icon,
				}
			);

			marker.addTo(map);
			marker.bindPopup(card);
		}
	}
};

export { filterMap };
