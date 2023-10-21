"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getGoodInfo({ animals, elements, currentPillar, cardStrength, }) {
    const isPowerGood = cardStrength.powerDescription === "Сверхсильная" ||
        cardStrength.powerDescription === "Слабая";
    const isGoodAnimal = (animal) => {
        return isPowerGood
            ? cardStrength.powerfulElements.find((powerfulElement) => powerfulElement.animals.includes(animal)) !== undefined
            : cardStrength.powerfulElements.find((powerfulElement) => powerfulElement.animals.includes(animal)) === undefined;
    };
    const isGoodElement = (element) => {
        return isPowerGood
            ? cardStrength.powerfulElements.find((powerfulElement) => powerfulElement.elements.includes(element)) !== undefined
            : cardStrength.powerfulElements.find((powerfulElement) => powerfulElement.elements.includes(element)) === undefined;
    };
    const goodInfo = {
        year: {
            isAnimalGood: false,
            isElementGood: false,
        },
        month: {
            isAnimalGood: false,
            isElementGood: false,
        },
        day: {
            isAnimalGood: false,
            isElementGood: false,
        },
        hour: {
            isAnimalGood: false,
            isElementGood: false,
        },
        currentPillar: {
            isAnimalGood: false,
            isElementGood: false,
        },
    };
    goodInfo.year.isAnimalGood = isGoodAnimal(animals.year);
    goodInfo.year.isElementGood = isGoodElement(elements.year);
    goodInfo.month.isAnimalGood = isGoodAnimal(animals.month);
    goodInfo.month.isElementGood = isGoodElement(elements.month);
    goodInfo.day.isAnimalGood = isGoodAnimal(animals.day);
    goodInfo.day.isElementGood = isGoodElement(elements.day);
    goodInfo.hour.isAnimalGood = isGoodAnimal(animals.hour);
    goodInfo.hour.isElementGood = isGoodElement(elements.hour);
    if (currentPillar) {
        goodInfo.currentPillar.isAnimalGood = isGoodAnimal(currentPillar.animal);
        goodInfo.currentPillar.isElementGood = isGoodElement(currentPillar.element);
    }
    return goodInfo;
}
exports.default = getGoodInfo;
//# sourceMappingURL=getGoodInfo.js.map