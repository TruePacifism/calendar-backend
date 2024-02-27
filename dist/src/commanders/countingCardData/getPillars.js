"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const daysBetweenDates_1 = __importDefault(require("../utils/daysBetweenDates"));
const getDirection = (gender, yearElement, monthAnimal) => {
    if (monthAnimal === enums_1.Animals.BULL) {
        return gender === "male";
    }
    if (monthAnimal === enums_1.Animals.TIGER) {
        return gender === "female";
    }
    const direction = (gender === "male" && yearElement.name.includes("ян")) ||
        (gender === "female" && yearElement.name.includes("инь"));
    return direction;
};
const getDaysToCount = (direction, birthdate, monthAnimal) => {
    const birthdateObject = new Date(birthdate.year, birthdate.month, birthdate.day);
    const yearStartObject = new Date(birthdate.year, 0, 1);
    const daysOfYear = Math.ceil((birthdateObject.getTime() - yearStartObject.getTime()) / 1000 / 3600 / 24);
    let daysToCount;
    const isFirstYearsBounds = (0, enums_1.countIsFirstYearBounds)(birthdate.year);
    if (monthAnimal === enums_1.Animals.RAT) {
        if (direction) {
            daysToCount = (0, enums_1.isDateInRange)({ day: birthdate.day, month: birthdate.month }, { day: 0, month: 0 }, enums_1.Animals.RAT.monthBounds.firstType.start)
                ? enums_1.Animals.RAT.monthBounds.firstType.end.day - birthdate.day + 1
                : 31 - birthdate.day + enums_1.Animals.RAT.monthBounds.firstType.end.day + 1;
        }
        else {
            daysToCount = (0, enums_1.isDateInRange)({ day: birthdate.day, month: birthdate.month }, enums_1.Animals.RAT.monthBounds.firstType.start, { day: 11, month: 31 })
                ? birthdate.day - enums_1.Animals.RAT.monthBounds.firstType.start.day
                : 31 - enums_1.Animals.RAT.monthBounds.firstType.start.day + birthdate.day;
        }
    }
    else {
        if (direction) {
            daysToCount =
                (0, daysBetweenDates_1.default)({ day: birthdate.day, month: birthdate.month }, isFirstYearsBounds
                    ? monthAnimal.monthBounds.firstType.end
                    : monthAnimal.monthBounds.secondType.end, birthdate.year) + 1;
        }
        else {
            daysToCount = (0, daysBetweenDates_1.default)(isFirstYearsBounds
                ? monthAnimal.monthBounds.firstType.start
                : monthAnimal.monthBounds.secondType.start, { day: birthdate.day, month: birthdate.month }, birthdate.year);
        }
    }
    return daysToCount;
};
function getPillars({ trueBirthdate: birthdate, gender, animals, elements, }) {
    if (birthdate.day === -1 || birthdate.month === -1 || !gender) {
        return [];
    }
    const direction = getDirection(gender, elements.year, animals.month);
    const daysToCount = getDaysToCount(direction, birthdate, animals.month);
    const firstYear = birthdate.year;
    const firstMonth = birthdate.month;
    let year = firstYear + Math.floor(daysToCount / 3);
    let month = birthdate.month + (daysToCount % 3) * 4;
    if (month > 11) {
        year += 1;
        month %= 12;
    }
    let ageYear = year - birthdate.year;
    let ageMonth = month - birthdate.month;
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }
    let animalIndex = Object.values(enums_1.Animals).findIndex((animal) => animal === animals.month);
    let elementIndex = Object.values(enums_1.Elements).findIndex((element) => element === elements.month);
    const pillars = [];
    year -= 10;
    ageYear -= 10;
    if (direction) {
        animalIndex += 1;
        animalIndex %= 12;
        elementIndex += 1;
        elementIndex %= 10;
        const firstPillar = {
            year: firstYear,
            month: firstMonth,
            ageYear: 0,
            ageMonth: 0,
            animal: Object.values(enums_1.Animals)[animalIndex],
            element: Object.values(enums_1.Elements)[elementIndex],
        };
        pillars.push(firstPillar);
        for (let i = 1; i < 13; i++) {
            year += 10;
            ageYear += 10;
            animalIndex += 1;
            animalIndex %= 12;
            elementIndex += 1;
            elementIndex %= 10;
            const newPillar = {
                year,
                month,
                ageYear,
                ageMonth,
                animal: Object.values(enums_1.Animals)[animalIndex],
                element: Object.values(enums_1.Elements)[elementIndex],
            };
            pillars.push(newPillar);
        }
    }
    else {
        animalIndex += 11;
        animalIndex %= 12;
        elementIndex += 9;
        elementIndex %= 10;
        const firstPillar = {
            year: firstYear,
            month: firstMonth,
            ageYear: 0,
            ageMonth: 0,
            animal: Object.values(enums_1.Animals)[animalIndex],
            element: Object.values(enums_1.Elements)[elementIndex],
        };
        pillars.push(firstPillar);
        for (let i = 1; i < 13; i++) {
            year += 10;
            ageYear += 10;
            animalIndex += 11;
            animalIndex %= 12;
            elementIndex += 9;
            elementIndex %= 10;
            const newPillar = {
                year,
                month,
                ageYear,
                ageMonth,
                animal: Object.values(enums_1.Animals)[animalIndex],
                element: Object.values(enums_1.Elements)[elementIndex],
            };
            pillars.push(newPillar);
        }
    }
    return pillars;
}
exports.default = getPillars;
//# sourceMappingURL=getPillars.js.map