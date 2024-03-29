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
const Schemas_1 = require("./Schemas");
const uuid_1 = require("uuid");
function addCard({ token, card }) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = (0, uuid_1.v4)();
        yield Schemas_1.UserModel.findOneAndUpdate({ token }, { $push: { cards: Object.assign({ id }, card) } })
            .then(() => {
            console.log("Успешное добавление карты");
        })
            .catch((error) => {
            console.error("Ошибка добавления:", error);
        });
        return id;
    });
}
exports.default = addCard;
//# sourceMappingURL=addCard.js.map