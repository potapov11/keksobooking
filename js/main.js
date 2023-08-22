import { blockForm } from "./modules/block-unlock-form.js";
import { formValidate } from "./modules/form-validate.js";
import { createMap } from "./modules/create-map.js";
import { renderData } from "./modules/create-map.js";
import { createSlider } from "./modules/create-slider.js";
import { getData } from "./modules/./get-set-serverdata.js";

const data = getData();
blockForm();
formValidate();
createMap();
renderData(data);
createSlider();
