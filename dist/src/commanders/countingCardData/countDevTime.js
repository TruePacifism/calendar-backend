"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_and_time_1 = __importDefault(require("date-and-time"));
function countDevTime({ birthdate, birthcity, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { year, month, day, hour, minute } = birthdate;
        // Если время не будет задано
        if (hour === -1 || !birthcity) {
            return birthdate;
        }
        const dateObject = new Date(year, month, day, hour, minute);
        const opencage = require("opencage-api-client");
        const data = yield opencage.geocode({ q: birthcity });
        if (data.status.code === 200 && data.results.length > 0) {
            const place = data.results[0];
            const devTime = ((place.annotations.timezone.offset_sec / 3600) * 15 -
                place.geometry.lng) *
                4;
            const isSummerTime = (month > 2 && month < 9) ||
                (month === 2 && day > 27) ||
                (month === 9 && day < 30) ||
                (month === 2 && day === 27 && hour > 2) ||
                (month === 9 && day === 30 && hour < 2);
            const devTimedDateObject = date_and_time_1.default.addMinutes(dateObject, devTime * -1 - (isSummerTime ? 60 : 0));
            const newBirthdate = {
                year: devTimedDateObject.getFullYear(),
                month: devTimedDateObject.getMonth(),
                day: devTimedDateObject.getDate(),
                hour: devTimedDateObject.getHours(),
                minute: devTimedDateObject.getMinutes(),
            };
            return newBirthdate;
        }
    });
}
exports.default = countDevTime;
//# sourceMappingURL=countDevTime.js.map