import { createObject } from "./modules/create-object.js";
import { renderInfoBlock } from "./modules/render-info-block.js";
import { blockForm, unlockForm } from "./modules/block-unlock-form.js";
import { formValidate } from "./modules/form-validate.js";
import { createMap } from "./modules/create-map.js";
import { createSlider } from "./modules/create-slider.js";

const resObjectsArr = createObject();
blockForm();
setTimeout(unlockForm, 1000);
formValidate();
createMap();
createSlider();
