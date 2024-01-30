"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDiff = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    return dayOfYear;
}
const exampleDate = new Date(100, 0, 1, 0, 0);
const getYear = (year, dayOfYear) => {
    const index = year % 10;
    if (dayOfYear === -1) {
        return Object.values(enums_1.Elements)[index];
    }
    const trueIndex = dayOfYear < enums_1.Animals.TIGER.monthBounds.start ? index - 1 : index;
    const indexWithOffset = (trueIndex + 10) % 10;
    return Object.values(enums_1.Elements)[indexWithOffset];
};
const getMonth = (date, animals) => {
    const yearDifference = date.getFullYear() - exampleDate.getFullYear();
    const monthDifference = date.getMonth() - exampleDate.getMonth() + yearDifference * 12;
    const trueMonthDifference = Object.values(enums_1.Animals)[date.getMonth()] === animals.month
        ? monthDifference
        : monthDifference - 1;
    const index = trueMonthDifference % 10;
    const indexWithOffset = (index + 7) % 10;
    return Object.values(enums_1.Elements)[indexWithOffset];
};
const getDay = (date) => {
    const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
    const index = dayCount % 10;
    const indexWithOffset = (index + 7) % 10;
    return Object.values(enums_1.Elements)[indexWithOffset];
};
const getHour = (date) => {
    const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
    const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
    const index = (Math.ceil(date.getHours() / 2) + (dayCount % 5) * 2) % 10;
    const indexWithOffset = index % 10;
    return Object.values(enums_1.Elements)[indexWithOffset];
};
function getElements({ birthdate, animals, }) {
    const { year, month, day, hour, minute } = birthdate;
    const dateObject = new Date(year, month === -1 ? 0 : month, day === -1 ? 1 : day, hour === -1 ? 1 : hour, minute === -1 ? 1 : minute);
    const dayOfYear = getDayOfYear(new Date(year, month, day));
    const yearElement = getYear(year, dayOfYear);
    const monthElement = month === -1 ? enums_1.Elements.NULL_ELEMENT : getMonth(dateObject, animals);
    const dayElement = day === -1 ? enums_1.Elements.NULL_ELEMENT : getDay(dateObject);
    const hourElement = hour === -1 ? enums_1.Elements.NULL_ELEMENT : getHour(dateObject);
    return {
        year: yearElement,
        month: monthElement,
        day: dayElement,
        hour: hourElement,
    };
}
exports.default = getElements;
//# sourceMappingURL=getElements.js.map