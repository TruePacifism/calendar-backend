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
function authUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const { token } = input;
        const id = Math.random().toString();
        const foundUser = yield Schemas_1.UserModel.findOne({ token });
        if (foundUser) {
            console.log("Пользователь существует");
            return foundUser;
        }
        else {
            Schemas_1.UserModel.insertMany(Object.assign({ id }, input))
                .then(() => {
                console.log("Пользователь успешно зарегистрирован");
            })
                .catch((error) => {
                console.log("Ошибка при добавлении:");
                console.log(error);
            });
        }
        return token;
    });
}
exports.default = authUser;
//# sourceMappingURL=authUser.js.map