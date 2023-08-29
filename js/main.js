import { blockForm } from "./modules/block-unlock-form.js";
import { formValidate } from "./modules/form-validate.js";
import { createMap } from "./modules/create-map.js";
import { renderPins } from "./modules/create-map.js";
import { createSlider } from "./modules/create-slider.js";
import { getData } from "./modules/./get-set-serverdata.js";
// import { filterMap } from "./modules/filter-map.js";

const data = getData();
data.then((data) => renderPins(data));
formValidate();
blockForm();
createMap();
createSlider();
// filterMap();
