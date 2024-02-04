"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const exampleDate = new Date(100, 0, 1, 0, 0);
function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDiff = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    return dayOfYear;
}
const getYear = (year, month, day) => {
    const index = year % 12;
    if (day === -1 || month === -1) {
        return Object.values(enums_1.Animals)[index];
    }
    const trueIndex = (0, enums_1.isDateInRange)({ day, month }, { day: 0, month: 0 }, enums_1.Animals.TIGER.monthBounds.firstType.start)
        ? index - 1
        : index;
    const indexWithOffset = (trueIndex + 7) % 12;
    return Object.values(enums_1.Animals)[indexWithOffset];
};
const getMonth = (day, month, isFirstYearsBounds) => {
    const animal = Object.values(enums_1.Animals).find((animal) => {
        if (isFirstYearsBounds) {
            return (0, enums_1.isDateInRange)({ day, month }, animal.monthBounds.firstType.start, animal.monthBounds.firstType.end);
        }
        else {
            return (0, enums_1.isDateInRange)({ day, month }, animal.monthBounds.secondType.start, animal.monthBounds.secondType.end);
        }
    });
    return animal ? animal : enums_1.Animals.RAT;
};
const getDay = (year, month, day) => {
    if (day == -1) {
        return enums_1.Animals.NULL_ANIMAL;
    }
    const dateObject = new Date(year, month, day);
    const timeDiff = dateObject.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
    const index = dayCount % 12;
    const indexWithOffset = (index + 5) % 12;
    return Object.values(enums_1.Animals)[indexWithOffset];
};
const getHour = (hour) => {
    switch (hour) {
        case 23:
        case 0:
            return enums_1.Animals.RAT;
        case 1:
        case 2:
            return enums_1.Animals.BULL;
        case 3:
        case 4:
            return enums_1.Animals.TIGER;
        case 5:
        case 6:
            return enums_1.Animals.RABBIT;
        case 7:
        case 8:
            return enums_1.Animals.DRAGON;
        case 9:
        case 10:
            return enums_1.Animals.SNAKE;
        case 11:
        case 12:
            return enums_1.Animals.HORSE;
        case 13:
        case 14:
            return enums_1.Animals.GOAT;
        case 15:
        case 16:
            return enums_1.Animals.MONKEY;
        case 17:
        case 18:
            return enums_1.Animals.ROOSTER;
        case 19:
        case 20:
            return enums_1.Animals.DOG;
        case 21:
        case 22:
            return enums_1.Animals.PIG;
        default:
            return enums_1.Animals.NULL_ANIMAL;
    }
};
function getAnimals({ birthdate }) {
    const { year, month, day, hour, minute } = birthdate;
    const isFirstYearsBounds = (0, enums_1.countIsFirstYearBounds)(year);
    const monthAnimal = day == -1 ? enums_1.Animals.NULL_ANIMAL : getMonth(day, month, isFirstYearsBounds);
    const yearAnimal = getYear(year, month, day);
    const dayAnimal = getDay(year, month, day);
    const hourAnimal = getHour(hour);
    return {
        year: yearAnimal,
        month: monthAnimal,
        day: dayAnimal,
        hour: hourAnimal,
    };
}
exports.default = getAnimals;
//# sourceMappingURL=getAnimals.js.map