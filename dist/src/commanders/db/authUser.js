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
const getUTC = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const opencage = require("opencage-api-client");
    const response = yield opencage.geocode({ q: city });
    if (response.status.code >= 200 &&
        response.status.code < 300 &&
        response.results.length > 0) {
        const UTC = response.results[0].annotations.timezone.offset_sec / 3600;
        console.log(UTC);
        return UTC;
    }
    return 0;
});
function authUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const { token, livingcity } = input;
        console.log("livingCity", livingcity);
        const id = Math.random().toString();
        const UTC = yield getUTC(livingcity);
        const foundUser = yield Schemas_1.UserModel.findOne({ token });
        if (foundUser) {
            console.log("Пользователь существует");
            return foundUser;
        }
        else {
            Schemas_1.UserModel.insertMany(Object.assign(Object.assign({ id }, input), { UTC }))
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