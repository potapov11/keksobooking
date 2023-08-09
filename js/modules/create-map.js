import { unlocksForm } from "./blocks-unlocks-form.js";
import { createObject } from "./create-object.js";
import { renderInfoBlock } from "./render-info-block.js";

const createMap = () => {
	const adressInput = document.querySelector("#address");
	const mapElement = document.querySelector("#map-canvas");
	const TILE_LAYER = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	const COPYRIGHT =
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
	const ZOOM = 14;
	const cityCenter = {
		lat: 35.6894875,
		lng: 139.6917064,
	};

	const map = L.map(mapElement)
		.on("load", () => {
			unlocksForm();
		})
		.setView(cityCenter, ZOOM);

	const startCoordinate = {
		lat: 35.6895,
		lng: 139.692,
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

	const icon = L.icon({
		iconUrl: miniIconConfig.url,
		iconSize: [miniIconConfig.width, miniIconConfig.height],
		iconAnchor: [miniIconConfig.anchorX, miniIconConfig.anchorY],
	});

	let resultAdressArr = [];
	let resultCardArr = [];
	for (let i = 0; i < 10; i++) {
		const data = createObject();
		const card = renderInfoBlock(data);
		resultAdressArr.push(data.location);
		resultCardArr.push(card);
	}

	resultAdressArr.forEach(({ lat, lng }, i) => {
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
		marker.bindPopup(resultCardArr[i]);
	});

	//выставляет начальные координаты в adressInput
	adressInput.value =
		cityCenter.lat.toFixed(5) + "   " + cityCenter.lng.toFixed(5);

	L.tileLayer(TILE_LAYER, {
		attribution: COPYRIGHT,
	}).addTo(map);

	const mainPinIcon = L.icon({
		iconUrl: iconConfig.url,
		iconSize: [iconConfig.width, iconConfig.height],
		iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
	});

	const mainPinMarker = L.marker(startCoordinate, {
		draggable: true,
		icon: mainPinIcon,
	});
	mainPinMarker.addTo(map);
	mainPinMarker.on("drag", (evt) => {
		const myLat = evt.target.getLatLng().lat;
		const myLng = evt.target.getLatLng().lng;
		adressInput.value = myLat.toFixed(5) + "   " + myLng.toFixed(5);
		// console.log(myLatLng);
	});
};

export { createMap };
