"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInputSchema = exports.todayInputSchema = exports.inputDataSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.inputDataSchema = joi_1.default.object({
    name: joi_1.default.string().allow(""),
    birthdate: joi_1.default.object({
        year: joi_1.default.number(),
        month: joi_1.default.number(),
        day: joi_1.default.number(),
        hour: joi_1.default.number(),
        minute: joi_1.default.number(),
        _id: joi_1.default.string(),
    }),
    gender: joi_1.default.string().allow(""),
    livingcity: joi_1.default.string().allow(""),
    birthcity: joi_1.default.string().allow(""),
    _id: joi_1.default.string(),
});
exports.todayInputSchema = joi_1.default.object({
    user: joi_1.default.object({
        _id: joi_1.default.string(),
        id: joi_1.default.number(),
        token: joi_1.default.string(),
        name: joi_1.default.string(),
        mail: joi_1.default.string(),
        livingcity: joi_1.default.string(),
        birthcity: joi_1.default.string(),
        UTC: joi_1.default.number(),
        __v: joi_1.default.string(),
    }),
    dayOffset: joi_1.default.number(),
});
exports.userInputSchema = joi_1.default.object({
    token: joi_1.default.string(),
    mail: joi_1.default.string(),
    firstName: joi_1.default.string().required(),
    secondName: joi_1.default.string(),
    thirdName: joi_1.default.string(),
    livingcity: joi_1.default.string().allow(""),
    birthcity: joi_1.default.string().allow(""),
    _id: joi_1.default.string(),
});
//# sourceMappingURL=joiSchemas.js.map