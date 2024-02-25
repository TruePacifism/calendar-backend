"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_and_time_1 = __importDefault(require("date-and-time"));
function convertDateToMinutes(date) {
    const { year, month, day, hour, minute } = date;
    const dateObject = new Date(year, month, day, hour, minute);
    return dateObject.getTime() / (1000 * 60); // Переводим миллисекунды в минуты
}
function calculateTimeDifferenceInMinutes(date1, date2) {
    const minutes1 = convertDateToMinutes(date1);
    const minutes2 = convertDateToMinutes(date2);
    return Math.round(minutes2 - minutes1);
}
function getHourCollisionsFrames({ trueBirthdate, birthdate, }) {
    const hourPosition = trueBirthdate.hour % 2 === 0 ? "end" : "start";
    const devTimeMinutes = calculateTimeDifferenceInMinutes(trueBirthdate, birthdate);
    const birthdateObject = new Date(birthdate.year, birthdate.month, birthdate.day, birthdate.hour, birthdate.minute);
    const startTime = hourPosition === "start"
        ? date_and_time_1.default.addMinutes(birthdateObject, -trueBirthdate.minute)
        : date_and_time_1.default.addMinutes(birthdateObject, -trueBirthdate.minute - 60);
    const endTime = hourPosition === "start"
        ? date_and_time_1.default.addMinutes(birthdateObject, -trueBirthdate.minute + 120)
        : date_and_time_1.default.addMinutes(birthdateObject, -trueBirthdate.minute + 60);
    return {
        start: {
            hour: startTime.getHours(),
            minute: startTime.getMinutes(),
        },
        end: {
            hour: endTime.getHours(),
            minute: endTime.getMinutes(),
        },
    };
}
exports.default = getHourCollisionsFrames;
//# sourceMappingURL=getHourCollisionsFrames.js.map