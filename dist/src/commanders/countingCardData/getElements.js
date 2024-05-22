"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDiff = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    return dayOfYear;
}
const exampleDate = new Date(100, 0, 1, 1, 0);
const getYear = (year, month, day, offset) => {
    const index = year % 10;
    if (day === -1 || month === -1) {
        return Object.values(enums_1.Elements)[index];
    }
    const trueIndex = (0, enums_1.isDateInRange)({ day, month }, { day: 0, month: 0 }, {
        day: enums_1.Animals.TIGER.monthBounds.firstType.start.day - 1,
        month: enums_1.Animals.TIGER.monthBounds.firstType.start.month,
    })
        ? index - 1
        : index;
    let indexWithOffset = trueIndex + 10 + offset;
    while (indexWithOffset < 0) {
        indexWithOffset += 10;
    }
    while (indexWithOffset >= 10) {
        indexWithOffset %= 10;
    }
    return Object.values(enums_1.Elements)[indexWithOffset];
};
const getMonth = (date, animals, offset) => {
    const yearDifference = date.getFullYear() - exampleDate.getFullYear();
    const monthDifference = date.getMonth() - exampleDate.getMonth() + yearDifference * 12;
    const trueMonthDifference = Object.values(enums_1.Animals)[date.getMonth()] === animals.month
        ? monthDifference
        : monthDifference - 1;
    const index = trueMonthDifference % 10;
    let indexWithOffset = index + 7 + offset;
    while (indexWithOffset < 0) {
        indexWithOffset += 10;
    }
    while (indexWithOffset >= 10) {
        indexWithOffset %= 10;
    }
    return Object.values(enums_1.Elements)[indexWithOffset];
};
const getDay = (date, offset) => {
    const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
    const index = dayCount % 10;
    let indexWithOffset = index + 7 + offset;
    while (indexWithOffset < 0) {
        indexWithOffset += 10;
    }
    while (indexWithOffset >= 10) {
        indexWithOffset %= 10;
    }
    return Object.values(enums_1.Elements)[indexWithOffset];
};
const getHour = (date, offset) => {
    console.log("date", date);
    const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
    const index = Math.ceil(timeDiff / (1000 * 3600 * 2) - 0.25) % 10;
    console.log(index);
    console.log(timeDiff / (1000 * 60 * 60 * 2) - 0.25);
    let indexWithOffset = index + 1 + offset;
    while (indexWithOffset < 0) {
        indexWithOffset += 10;
    }
    while (indexWithOffset >= 10) {
        indexWithOffset %= 10;
    }
    return Object.values(enums_1.Elements)[indexWithOffset];
};
function getElements({ birthdate, animals, offset, }) {
    const { year, month, day, hour, minute } = birthdate;
    console.log(birthdate);
    const dateObject = new Date(Date.UTC(year, month === -1 ? 0 : month, day === -1 ? 1 : day, hour === -1 ? 1 : hour, minute === -1 ? 1 : minute));
    console.log(dateObject);
    const yearElement = getYear(year, month, day, offset ? offset.year : 0);
    const monthElement = month === -1
        ? enums_1.Elements.NULL_ELEMENT
        : getMonth(dateObject, animals, offset ? offset.month : 0);
    const dayElement = day === -1 ? enums_1.Elements.NULL_ELEMENT : getDay(dateObject, 0);
    const hourElement = hour === -1 ? enums_1.Elements.NULL_ELEMENT : getHour(dateObject, 0);
    return {
        year: yearElement,
        month: monthElement,
        day: dayElement,
        hour: hourElement,
    };
}
exports.default = getElements;
//# sourceMappingURL=getElements.js.map