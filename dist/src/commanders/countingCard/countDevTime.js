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
Object.defineProperty(exports, "__esModule", { value: true });
function countDevTime({ birthdate, birthcity, name, gender, livingcity, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { year, month, day, hour, minute } = birthdate;
        const dateObject = new Date(year, month, day, hour, minute);
        const opencage = require("opencage-api-client");
        const data = yield opencage.geocode({ q: birthcity });
        if (data.status.code === 200 && data.results.length > 0) {
            const place = data.results[0];
            const devTime = ((place.annotations.timezone.offset_sec / 3600) * 15 -
                place.geometry.lng) *
                4;
            dateObject.setMinutes(dateObject.getMinutes() - devTime);
            const newBirthdate = {
                year: dateObject.getFullYear(),
                month: dateObject.getMonth(),
                day: dateObject.getDate(),
                hour: dateObject.getHours(),
                minute: dateObject.getMinutes(),
            };
            return newBirthdate;
        }
    });
}
exports.default = countDevTime;
//# sourceMappingURL=countDevTime.js.map