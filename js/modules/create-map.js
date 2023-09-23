import { unlockForm, unlockFilters, blockForm } from "./block-unlock-form.js";
import { renderInfoBlock } from "./render-info-block.js";
import { filterMap } from "./filter-map.js";
import { showError } from "./error-succes-message.js";
import { getData } from "./get-set-server-data.js";
import { debounce } from "./utils.js";

const DEBOUNCE_TIMER = 500;
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

const mainPinIcon = L.icon({
	iconUrl: iconConfig.url,
	iconSize: [iconConfig.width, iconConfig.height],
	iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});
const startCoordinate = {
	lat: 35.67409,
	lng: 139.74321,
};
const mainPinMarker = L.marker(startCoordinate, {
	draggable: true,
	icon: mainPinIcon,
});

const icon = L.icon({
	iconUrl: miniIconConfig.url,
	iconSize: [miniIconConfig.width, miniIconConfig.height],
	iconAnchor: [miniIconConfig.anchorX, miniIconConfig.anchorY],
});

const form = document.querySelector(".map__filters");
const adressInput = document.querySelector("#address");
const mapElement = document.querySelector("#map-canvas");

let map;

//выставляет начальные координаты в adressInput
const setAddressInput = () => {
	adressInput.value =
		cityCenter.lat.toFixed(5) + ",  " + cityCenter.lng.toFixed(5);
};
setAddressInput();

const createMap = () => {
	blockForm();

	map = L.map(mapElement)
		.on("load", () => {
			const data = getData(showError);
			data.then((data) => {
				renderPins(data);
			});
			unlockForm();
		})
		.setView(cityCenter, ZOOM);

	L.tileLayer(TILE_LAYER, {
		attribution: COPYRIGHT,
	}).addTo(map);

	mainPinMarker.addTo(map);
	mainPinMarker.on("drag", (evt) => {
		const myLat = evt.target.getLatLng().lat;
		const myLng = evt.target.getLatLng().lng;
		adressInput.value = myLat.toFixed(5) + ",   " + myLng.toFixed(5);
	});
};

//Получает данные с сервера и отрисовывает
const renderPins = (data) => {
	if (data) {
		unlockFilters();

		const dataSlice = data.slice(0, 10);

		const formDebounceHandler = debounce(() => {
			filterMap(data);
		}, DEBOUNCE_TIMER);

		form.addEventListener("change", formDebounceHandler);

		for (let i = 0; i < dataSlice.length; i++) {
			const card = renderInfoBlock(dataSlice[i]);

			const lat = dataSlice[i].location.lat;
			const lng = dataSlice[i].location.lng;
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

export {
	createMap,
	renderPins,
	icon,
	map,
	mainPinMarker,
	startCoordinate,
	cityCenter,
};
