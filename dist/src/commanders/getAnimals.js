"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const exampleDate = new Date(100, 0, 1, 0, 0);
function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDiff = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    return dayOfYear;
}
const getYear = (year, dayOfYear) => {
    const index = year % 12;
    const trueIndex = dayOfYear < enums_1.Animals.TIGER.monthBounds.start ? index - 1 : index;
    const indexWithOffset = (trueIndex + 7) % 12;
    return Object.values(enums_1.Animals)[indexWithOffset];
};
const getMonth = (dayOfYear) => {
    const animal = Object.values(enums_1.Animals).find((animal) => animal.monthBounds.start <= dayOfYear &&
        animal.monthBounds.end >= dayOfYear);
    return animal ? animal : enums_1.Animals.RAT;
};
const getDay = (year, month, day) => {
    const dateObject = new Date(year, month, day);
    const timeDiff = dateObject.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
    const index = dayCount % 12;
    const indexWithOffset = (index + 10) % 12;
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
            break;
    }
};
function getAnimals({ birthdate }) {
    const { year, month, day, hour, minute } = birthdate;
    const dateObject = new Date(year, month, day, hour, minute);
    const dayOfYear = getDayOfYear(new Date(year, month, day));
    const monthAnimal = getMonth(dayOfYear);
    const yearAnimal = getYear(year, dayOfYear);
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