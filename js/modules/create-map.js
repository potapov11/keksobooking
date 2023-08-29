import { unlockForm, unlockFilters, blockForm } from "./block-unlock-form.js";
import { renderInfoBlock } from "./render-info-block.js";
///////////
// import { filterMap } from "./filter-map.js";
const form = document.querySelector(".map__filters");

//////////

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

/////////

const housePrices = {
	low: {
		from: 0,
		to: 10000,
	},

	middle: {
		from: 10000,
		to: 50000,
	},

	high: {
		from: 50000,
		to: 100000,
	},
};

//Получает данные с сервера и отрисовывает
const renderPins = (data) => {
	if (data) {
		unlockFilters();

		//обработчик события на изменения в фильтрах
		form.addEventListener("change", function (evt) {
			// очищаем карту от старых маркеров
			const leafletMarkers = document.querySelectorAll(".leaflet-marker-icon");
			leafletMarkers.forEach((item) => {
				item.remove();
			});

			const selectedPriceRange = housePrices[evt.target.value];
			const filteredData = data.filter((item) => {
				return (
					item.offer.price >= selectedPriceRange.from &&
					item.offer.price <= selectedPriceRange.to
				);
			});
			// теперь массив filteredData содержит только те элементы, цена которых попадает в выбранный диапазон
			console.log(filteredData);
			console.log(filteredData.length);
			if (filteredData) {
				for (let i = 0; i < filteredData.length; i++) {
					console.log(filteredData[i]);
					const card = renderInfoBlock(filteredData[i]);

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
		});

		for (let i = 0; i < 10; i++) {
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

export { createMap, renderPins };
