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
    }),
    gender: joi_1.default.string().allow(""),
    livingcity: joi_1.default.string().allow(""),
    birthcity: joi_1.default.string().allow(""),
});
exports.todayInputSchema = joi_1.default.object({
    city: joi_1.default.string().required(),
});
exports.userInputSchema = joi_1.default.object({
    token: joi_1.default.string(),
    mail: joi_1.default.string(),
    name: joi_1.default.string(),
});
//# sourceMappingURL=joiSchemas.js.map