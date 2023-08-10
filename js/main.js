import { createObject } from "./modules/create-object.js";
import { renderInfoBlock } from "./modules/render-info-block.js";
import { bloksForm, unlocksForm } from "./modules/blocks-unlocks-form.js";
import { formValidate } from "./modules/form-validate.js";
import { createMap } from "./modules/create-map.js";
import { createSlider } from "./modules/create-slider.js";

const resObjectsArr = createObject();
bloksForm();
setTimeout(unlocksForm, 1000);
formValidate();
createMap();
createSlider();
