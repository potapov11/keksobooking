import { unlockForm, unlockFilters, blockForm } from "./block-unlock-form.js";
import { renderInfoBlock } from "./render-info-block.js";
import { filterMap } from "./filter-map.js";
import { debounce } from "./utils.js";
// const form = document.querySelector(".map__filters");

const DEBOUNCE_TIMER = 500;

const adressInput = document.querySelector("#address");
const mapElement = document.querySelector("#map-canvas");
const TILE_LAYER = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const COPYRIGHT =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 13;
const cityCenter = {
	lat: 35.67409,
	lng: 139.74321,
};

//иконка
const iconConfig = {
	url: "./img/main-pin.svg",
	width: 52,
	height: 52,
	anchorX: 26,
	anchorY: 52,
};

//ДопИконка
const miniIconConfig = {
	url: "./img/pin.svg",
	width: 40,
	height: 40,
	anchorX: 20,
	anchorY: 40,
};

let map;

const icon = L.icon({
	iconUrl: miniIconConfig.url,
	iconSize: [miniIconConfig.width, miniIconConfig.height],
	iconAnchor: [miniIconConfig.anchorX, miniIconConfig.anchorY],
});

const createMap = () => {
	blockForm();

	map = L.map(mapElement)
		.on("load", () => {
			unlockForm();
		})
		.setView(cityCenter, ZOOM);

	const startCoordinate = {
		lat: 35.67409,
		lng: 139.74321,
	};

	const mainPinIcon = L.icon({
		iconUrl: iconConfig.url,
		iconSize: [iconConfig.width, iconConfig.height],
		iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
	});

	const mainPinMarker = L.marker(startCoordinate, {
		draggable: true,
		icon: mainPinIcon,
	});

	//выставляет начальные координаты в adressInput
	const setAddressInput = () => {
		adressInput.value =
			cityCenter.lat.toFixed(5) + ",  " + cityCenter.lng.toFixed(5);
	};
	setAddressInput();

	L.tileLayer(TILE_LAYER, {
		attribution: COPYRIGHT,
	}).addTo(map);

	mainPinMarker.addTo(map);
	mainPinMarker.on("drag", (evt) => {
		const myLat = evt.target.getLatLng().lat;
		const myLng = evt.target.getLatLng().lng;
		adressInput.value = myLat.toFixed(5) + "   " + myLng.toFixed(5);
	});
};

//Получает данные с сервера и отрисовывает
const renderPins = (data) => {
	if (data) {
		unlockFilters();
		// filterMap(data);
		const form = document.querySelector(".map__filters");

		form.addEventListener(
			"change",
			debounce(() => filterMap(data), DEBOUNCE_TIMER)
		);

		for (let i = 0; i < data.length; i++) {
			const card = renderInfoBlock(data[i]);

			const lat = data[i].location.lat;
			const lng = data[i].location.lng;
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

export { createMap, renderPins, icon, map };
