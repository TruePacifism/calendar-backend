"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getCardStrength({ animals, elements, mainElement, }) {
    const powerfulElements = Object.values(enums_1.MainElements).filter((mainElementItem, idx) => mainElementItem === mainElement ||
        Object.values(enums_1.MainElements)[(idx + 4) % 5] === mainElement);
    let power = -1;
    let maxPower = -1;
    Object.values(animals).forEach((animal) => {
        if (animal === enums_1.Animals.NULL_ANIMAL) {
            return;
        }
        if (powerfulElements[0].animals.includes(animal) ||
            powerfulElements[1].animals.includes(animal)) {
            power += 1;
        }
        maxPower += 1;
    });
    Object.values(elements).forEach((element) => {
        if (element === enums_1.Elements.NULL_ELEMENT) {
            return;
        }
        if (powerfulElements[0].elements.includes(element) ||
            powerfulElements[1].elements.includes(element)) {
            power += 1;
        }
        maxPower += 1;
    });
    let powerDescription;
    if (power < maxPower / 2) {
        powerDescription = "Слабая";
    }
    if (power >= maxPower / 2) {
        powerDescription = "Сильная";
    }
    if (power === 0) {
        powerDescription = "Сверхслабая";
    }
    if (power === maxPower) {
        powerDescription = "Сверхсильная";
    }
    return {
        power,
        powerfulElements,
        maxPower,
        powerDescription,
    };
}
exports.default = getCardStrength;
//# sourceMappingURL=getCardStrength.js.map