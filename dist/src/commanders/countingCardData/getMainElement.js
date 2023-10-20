"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getMainElement({ elements, }) {
    const mainElement = Object.values(enums_1.MainElements).find((mainElement) => mainElement.elements.includes(elements.year));
    return mainElement;
}
exports.default = getMainElement;
//# sourceMappingURL=getMainElement.js.map