"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const getDirection = (gender, yearElement) => {
    const direction = (gender === "male" && yearElement.name.includes("Ян")) ||
        (gender === "female" && yearElement.name.includes("Инь"));
    return direction;
};
const getDaysToCount = (direction, birthdate, monthAnimal) => {
    const birthdateObject = new Date(birthdate.year, birthdate.month, birthdate.day);
    const yearStartObject = new Date(birthdate.year, 0, 1);
    const daysOfYear = Math.ceil((birthdateObject.getTime() - yearStartObject.getTime()) / 1000 / 3600 / 24);
    let daysToCount;
    if (monthAnimal === enums_1.Animals.RAT) {
        if (direction) {
            daysToCount =
                daysOfYear <= enums_1.Animals.RAT.monthBounds.end
                    ? enums_1.Animals.RAT.monthBounds.end - daysOfYear
                    : 365 - daysOfYear + enums_1.Animals.RAT.monthBounds.start;
        }
        else {
            daysToCount =
                daysOfYear <= enums_1.Animals.RAT.monthBounds.end
                    ? 365 - enums_1.Animals.RAT.monthBounds.start + daysOfYear
                    : daysOfYear - enums_1.Animals.RAT.monthBounds.start;
        }
    }
    else {
        if (direction) {
            daysToCount = monthAnimal.monthBounds.end - daysOfYear;
        }
        else {
            daysToCount = daysOfYear - monthAnimal.monthBounds.start;
        }
    }
    return daysToCount;
};
function getPillars({ birthdate, gender, animals, elements, }) {
    const direction = getDirection(gender, elements.year);
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
        for (let i = 1; i < 11; i++) {
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
        for (let i = 1; i < 11; i++) {
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