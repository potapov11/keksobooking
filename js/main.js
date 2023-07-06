import { createObject } from "./modules/create-object.js";
import { createElements } from "./modules/generate-elements.js";

const resObjectsArr = Array.from({ length: 10 }, createObject);
createElements();
