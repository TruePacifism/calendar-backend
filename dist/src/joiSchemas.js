"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputDataSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.inputDataSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    birthdate: joi_1.default.object({
        year: joi_1.default.number(),
        month: joi_1.default.number(),
        day: joi_1.default.number(),
        hour: joi_1.default.number(),
        minute: joi_1.default.number(),
    }),
    gender: joi_1.default.string().required(),
    livingcity: joi_1.default.string().required(),
    birthcity: joi_1.default.string().required(),
});
//# sourceMappingURL=joiSchemas.js.map