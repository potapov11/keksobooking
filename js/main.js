import { createObject } from "./modules/create-object.js";
import { renderInfoBlock } from "./modules/render-info-block.js";
import { bloksForm, unlocksForm } from "./modules/blocks-unlocks-form.js";

const resObjectsArr = createObject();
renderInfoBlock(resObjectsArr);
bloksForm();
setTimeout(unlocksForm, 5000);
