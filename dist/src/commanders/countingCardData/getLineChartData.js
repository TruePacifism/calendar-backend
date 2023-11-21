"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const getAnimals_1 = __importDefault(require("./getAnimals"));
const animalsOrder = [
    enums_1.Animals.BULL,
    enums_1.Animals.TIGER,
    enums_1.Animals.RABBIT,
    enums_1.Animals.DRAGON,
    enums_1.Animals.SNAKE,
    enums_1.Animals.HORSE,
    enums_1.Animals.GOAT,
    enums_1.Animals.MONKEY,
    enums_1.Animals.ROOSTER,
    enums_1.Animals.DOG,
    enums_1.Animals.PIG,
    enums_1.Animals.RAT,
];
const getAnimalValue = (animalBirth, animalNow) => {
    if (animalBirth === enums_1.Animals.NULL_ANIMAL) {
        return null;
    }
    const indexAnimalBirth = animalsOrder.findIndex((animal) => animal.name === animalBirth.name);
    const indexAnimalNow = animalsOrder.findIndex((animal) => animal.name === animalNow.name);
    const indexDiff = Math.abs(indexAnimalBirth - indexAnimalNow);
    const value = indexDiff > 6 ? indexDiff - 6 : indexDiff;
    return value;
};
function getLineChartData({ year, month, day, }) {
    const now = new Date();
    const nowAnimals = (0, getAnimals_1.default)({
        birthdate: {
            year: now.getFullYear(),
            month: now.getMonth(),
            day: now.getDate(),
            hour: now.getHours(),
            minute: now.getMinutes(),
        },
    });
    const yearValue = getAnimalValue(year, nowAnimals.year);
    const monthValue = (getAnimalValue(month, nowAnimals.month) * 2) / 3;
    const dayValue = (getAnimalValue(day, nowAnimals.day) * 1) / 3;
    const result = {
        year: [
            {
                date: now.getFullYear(),
                value: yearValue,
            },
        ],
        month: [
            {
                date: now.getMonth(),
                value: monthValue,
            },
        ],
        day: [
            {
                date: now.getDate(),
                value: dayValue,
            },
        ],
    };
    return result;
}
exports.default = getLineChartData;
//# sourceMappingURL=getLineChartData.js.map