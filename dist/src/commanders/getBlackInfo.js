"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
function getBlackInfo({ animals, elements, currentPillar, }) {
    const blackAnimals = [];
    switch (elements.year) {
        case enums_1.Elements.METAL_IN:
        case enums_1.Elements.METAL_YAN:
        case enums_1.Elements.EARTH_IN:
            blackAnimals.push(enums_1.Animals.RABBIT, enums_1.Animals.DRAGON, enums_1.Animals.SNAKE);
            break;
        case enums_1.Elements.EARTH_YAN:
            blackAnimals.push(enums_1.Animals.RAT, enums_1.Animals.BULL, enums_1.Animals.TIGER);
            break;
        case enums_1.Elements.WOOD_IN:
        case enums_1.Elements.WOOD_YAN:
            blackAnimals.push(enums_1.Animals.HORSE, enums_1.Animals.GOAT);
            break;
        case enums_1.Elements.FIRE_IN:
        case enums_1.Elements.FIRE_YAN:
        case enums_1.Elements.WATER_IN:
        case enums_1.Elements.WATER_YAN:
            blackAnimals.push(enums_1.Animals.DRAGON, enums_1.Animals.MONKEY);
            break;
    }
    const blackInfo = {
        year: {
            isAnimalBlack: false,
            isElementBlack: false,
        },
        month: {
            isAnimalBlack: false,
            isElementBlack: false,
        },
        day: {
            isAnimalBlack: false,
            isElementBlack: false,
        },
        hour: {
            isAnimalBlack: false,
            isElementBlack: false,
        },
        currentPillar: {
            isAnimalBlack: false,
            isElementBlack: false,
        },
    };
    if (blackAnimals.includes(animals.year)) {
        blackInfo.year.isAnimalBlack = true;
        blackInfo.year.isElementBlack = true;
    }
    if (blackAnimals.includes(animals.month)) {
        blackInfo.month.isAnimalBlack = true;
        blackInfo.year.isElementBlack = true;
    }
    if (blackAnimals.includes(currentPillar.animal)) {
        blackInfo.currentPillar.isAnimalBlack = true;
        blackInfo.year.isElementBlack = true;
    }
    return blackInfo;
}
exports.default = getBlackInfo;
//# sourceMappingURL=getBlackInfo.js.map