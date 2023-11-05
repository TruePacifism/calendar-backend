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
const getCardData_1 = __importDefault(require("./getCardData"));
function countToday({ city, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const now = new Date();
        const todayProps = {
            name: "сегодня",
            birthcity: "Черемхово",
            livingcity: "Санкт-петербург",
            birthdate: {
                year: now.getFullYear(),
                month: now.getMonth(),
                day: now.getDate(),
                hour: now.getHours(),
                minute: now.getMinutes(),
            },
            gender: "male",
        };
        const todayData = yield (0, getCardData_1.default)(todayProps);
        return todayData;
    });
}
exports.default = countToday;
//# sourceMappingURL=countToday.js.map