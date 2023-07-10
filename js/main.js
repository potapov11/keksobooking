import { createObject } from "./modules/create-object.js";
import { renderInfoBlock } from "./modules/render-Info-block.js";

const resObjectsArr = Array.from({ length: 5 }, createObject);
renderInfoBlock(resObjectsArr);
