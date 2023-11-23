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
const Schemas_1 = require("../db/Schemas");
const getCardData_1 = __importDefault(require("./getCardData"));
function recountAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield Schemas_1.UserModel.find({});
        users.forEach((user) => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(user.cards.map((card) => __awaiter(this, void 0, void 0, function* () {
                const { birthcity, birthdate, gender, livingcity, name } = card;
                if (gender !== "male" && gender !== "" && gender !== "female") {
                    return;
                }
                const newCard = yield (0, getCardData_1.default)({
                    birthcity,
                    birthdate,
                    gender,
                    livingcity,
                    name,
                });
                card.set(Object.assign(Object.assign({}, card), newCard));
                card.save();
                return card;
            })));
            user.save();
        }));
        return "Все карты пересчитаны";
    });
}
exports.default = recountAllData;
//# sourceMappingURL=recountAllData.js.map