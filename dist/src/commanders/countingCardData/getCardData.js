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
const getAge_1 = __importDefault(require("./getAge"));
const getAnimals_1 = __importDefault(require("./getAnimals"));
const getBlackInfo_1 = __importDefault(require("./getBlackInfo"));
const getCardStrength_1 = __importDefault(require("./getCardStrength"));
const getChartData_1 = __importDefault(require("./getChartData"));
const getChineseDate_1 = __importDefault(require("./getChineseDate"));
const getCityCoordinates_1 = __importDefault(require("./getCityCoordinates"));
const getCollisions_1 = __importDefault(require("./getCollisions"));
const getCurrentPillar_1 = __importDefault(require("./getCurrentPillar"));
const getDirection_1 = __importDefault(require("./getDirection"));
const getElements_1 = __importDefault(require("./getElements"));
const getFallingStars_1 = __importDefault(require("./getFallingStars"));
const getGenderCount_1 = __importDefault(require("./getGenderCount"));
const getGoodInfo_1 = __importDefault(require("./getGoodInfo"));
const getLineChartData_1 = __importDefault(require("./getLineChartData"));
const getMainElement_1 = __importDefault(require("./getMainElement"));
const getMovedDirection_1 = __importDefault(require("./getMovedDirection"));
const getPillars_1 = __importDefault(require("./getPillars"));
const toPrettierData_1 = __importDefault(require("./toPrettierData"));
function getCardData(inputData) {
    return __awaiter(this, void 0, void 0, function* () {
        const isToday = inputData.name === "today";
        const { gender } = inputData;
        const date = new Date();
        const birthcityCoordinates = yield (0, getCityCoordinates_1.default)({
            cityName: inputData.birthcity,
        });
        const livingcityCoordinates = yield (0, getCityCoordinates_1.default)({
            cityName: inputData.livingcity,
        });
        const trueBirthdate = yield (0, countDevTime_1.default)({
            birthdate: inputData.birthdate,
            birthcity: isToday ? inputData.livingcity : inputData.birthcity,
        });
        const age = (0, getAge_1.default)({ birthdate: trueBirthdate });
        const animals = (0, getAnimals_1.default)({
            birthdate: trueBirthdate,
            offset: inputData.offset,
        });
        const elements = (0, getElements_1.default)({
            birthdate: trueBirthdate,
            animals: animals,
            offset: inputData.offset,
        });
        const chineseBirthdate = (0, getChineseDate_1.default)(trueBirthdate, animals);
        const pillars = (0, getPillars_1.default)({
            trueBirthdate,
            gender,
            animals,
            elements,
        });
        const currentPillar = isToday ? null : (0, getCurrentPillar_1.default)({ pillars });
        const mainElement = (0, getMainElement_1.default)({ elements });
        const lineChartData = (0, getLineChartData_1.default)({
            year: animals.year,
            month: animals.month,
            day: animals.day,
            birthdate: trueBirthdate,
        });
        const cardStrength = (0, getCardStrength_1.default)({
            animals,
            elements,
            mainElement,
            currentPillar,
        });
        const blackInfo = (0, getBlackInfo_1.default)({ animals, elements, currentPillar });
        const goodInfo = (0, getGoodInfo_1.default)({
            animals,
            elements,
            currentPillar,
            cardStrength,
        });
        const movedDirection = yield (0, getMovedDirection_1.default)({
            livingcityCoordinates,
            birthcityCoordinates,
        });
        const chartData = (0, getChartData_1.default)({ momId: "", dadId: "", animals, elements });
        const collisionsInfo = (0, getCollisions_1.default)({ animals, currentPillar, pillars });
        const fallingStars = (0, getFallingStars_1.default)({ birthdate: trueBirthdate, animals });
        const genderCount = (0, getGenderCount_1.default)({ animals, currentPillar });
        const direction = (0, getDirection_1.default)({ birthdate: chineseBirthdate });
        const prettierData = (0, toPrettierData_1.default)({
            data: Object.assign(Object.assign({}, inputData), { date,
                age,
                trueBirthdate,
                chineseBirthdate,
                animals,
                elements,
                chartData,
                direction,
                pillars,
                movedDirection,
                lineChartData,
                mainElement,
                currentPillar,
                blackInfo,
                goodInfo,
                collisionsInfo,
                fallingStars,
                cardStrength,
                genderCount }),
        });
        return prettierData;
    });
}
exports.default = getCardData;
//# sourceMappingURL=getCardData.js.map