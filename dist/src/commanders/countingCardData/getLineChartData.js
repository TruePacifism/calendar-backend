"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_and_time_1 = require("date-and-time");
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
    const indexDiff = indexAnimalBirth > indexAnimalNow
        ? indexAnimalBirth - indexAnimalNow
        : indexAnimalNow - indexAnimalBirth;
    const indexDiffMinimal = indexDiff > 6 ? 12 - indexDiff : indexDiff;
    const value = Math.abs(indexDiffMinimal - 6) - 3;
    // console.log(
    //   `Животное рождения: ${animalBirth.name}
    //   Животное для сравнения: ${animalNow.name}
    //   Разница: ${indexDiff}
    //   Минимальная разница: ${indexDiffMinimal}
    //   Результат: ${value}`
    // );
    return value;
};
const dateToObject = (date) => {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
    };
};
function getLineChartData({ year, month, day, }) {
    const now = new Date();
    const yearNowValue = getAnimalValue(year, (0, getAnimals_1.default)({ birthdate: dateToObject(now) }).year);
    const monthNowValue = getAnimalValue(month, (0, getAnimals_1.default)({ birthdate: dateToObject(now) }).month);
    const startYearsDate = (0, date_and_time_1.addYears)(now, -4);
    const yearValues = [];
    const startMonthDate = (0, date_and_time_1.addMonths)(now, -4);
    const monthValues = [];
    const startDaysDate = (0, date_and_time_1.addDays)(now, -4);
    const dayValues = [];
    for (let i = 1; i <= 9; i++) {
        // Вычисление данных по году
        const yearDate = (0, date_and_time_1.addYears)(startYearsDate, i);
        const yearAnimal = (0, getAnimals_1.default)({
            birthdate: dateToObject(yearDate),
        }).year;
        const yearValue = getAnimalValue(year, yearAnimal);
        yearValues.push({
            date: yearDate.getFullYear(),
            value: yearValue,
        });
        // Вычисление данных по месяцу
        const monthDate = (0, date_and_time_1.addMonths)(startMonthDate, i);
        const monthAnimal = (0, getAnimals_1.default)({
            birthdate: dateToObject(monthDate),
        }).month;
        const monthValue = getAnimalValue(month, monthAnimal);
        monthValues.push({
            date: monthDate.getMonth(),
            value: monthValue * (2 / 3) + yearNowValue,
        });
        //Вычисление данных по дню
        const dayDate = (0, date_and_time_1.addDays)(startDaysDate, i);
        const dayAnimal = (0, getAnimals_1.default)({
            birthdate: dateToObject(dayDate),
        }).day;
        const dayValue = getAnimalValue(day, dayAnimal);
        dayValues.push({
            date: dayDate.getDate(),
            value: dayValue * (1 / 3) + monthNowValue * (2 / 3) + yearNowValue,
        });
    }
    const result = {
        year: yearValues,
        month: monthValues,
        day: dayValues,
    };
    return result;
}
exports.default = getLineChartData;
//# sourceMappingURL=getLineChartData.js.map