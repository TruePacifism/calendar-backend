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
const countDevTime_1 = __importDefault(require("./countDevTime"));
const getAnimals_1 = __importDefault(require("./getAnimals"));
const getBlackInfo_1 = __importDefault(require("./getBlackInfo"));
const getCardStrength_1 = __importDefault(require("./getCardStrength"));
const getCurrentPillar_1 = __importDefault(require("./getCurrentPillar"));
const getElements_1 = __importDefault(require("./getElements"));
const getFallingStars_1 = __importDefault(require("./getFallingStars"));
const getGenderCount_1 = __importDefault(require("./getGenderCount"));
const getGoodInfo_1 = __importDefault(require("./getGoodInfo"));
const getMainElement_1 = __importDefault(require("./getMainElement"));
const getPillars_1 = __importDefault(require("./getPillars"));
function getCardData(inputData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { gender } = inputData;
        const trueBirthdate = yield (0, countDevTime_1.default)(inputData);
        const animals = (0, getAnimals_1.default)({ birthdate: trueBirthdate });
        const elements = (0, getElements_1.default)({ birthdate: trueBirthdate, animals: animals });
        const pillars = (0, getPillars_1.default)({
            birthdate: trueBirthdate,
            gender,
            animals,
            elements,
        });
        const currentPillar = (0, getCurrentPillar_1.default)({ pillars });
        const mainElement = (0, getMainElement_1.default)({ elements });
        const cardStrength = (0, getCardStrength_1.default)({ animals, elements, mainElement });
        const blackInfo = (0, getBlackInfo_1.default)({ animals, elements, currentPillar });
        const goodInfo = (0, getGoodInfo_1.default)({
            animals,
            elements,
            currentPillar,
            cardStrength,
        });
        const fallingStars = (0, getFallingStars_1.default)({ birthdate: trueBirthdate, animals });
        const genderCount = (0, getGenderCount_1.default)({ animals });
        return Object.assign(Object.assign({}, inputData), { birthdate: trueBirthdate, animals,
            elements,
            pillars,
            currentPillar,
            blackInfo,
            goodInfo,
            fallingStars,
            cardStrength,
            genderCount });
    });
}
exports.default = getCardData;
//# sourceMappingURL=getCardData.js.map