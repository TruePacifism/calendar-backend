"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const elementSchema = new Schema({
    name: String,
});
const animalSchema = new Schema({
    name: String,
    element: elementSchema,
    monthBounds: {
        start: Number,
        end: Number,
    },
});
const collisionTargetSchema = new Schema({
    animal: animalSchema,
    targetTime: String,
});
const collisionSchema = new Schema({
    id: Number,
    shape: String,
    color: String,
    secondTarget: collisionTargetSchema,
    thirdTarget: collisionTargetSchema,
});
const outputAnimalSchema = new Schema({
    name: String,
    collisions: [collisionSchema],
    isGood: Boolean,
    isBlack: Boolean,
});
const outputElementSchema = new Schema({
    name: String,
    isGood: Boolean,
    isBlack: Boolean,
});
const outputPillarSchema = new Schema({
    animal: outputAnimalSchema,
    element: outputElementSchema,
    year: Number,
    month: Number,
    ageYear: Number,
    ageMonth: Number,
});
const mainElementSchema = new Schema({
    name: String,
    animals: [animalSchema],
    elements: [elementSchema],
});
const cardStrengthSchema = new Schema({
    power: Number,
    powerDescription: String,
    powerfulElements: [mainElementSchema],
    maxPower: Number,
    leader: mainElementSchema,
});
const fallingStarSchema = new Schema({
    yearNumber: Number,
    monthNumber: Number,
});
const outputDatePartSchema = new Schema({
    animal: outputAnimalSchema,
    element: outputElementSchema,
    name: String,
});
const dateSchema = new Schema({
    year: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    day: {
        type: Number,
        required: true,
    },
    hour: {
        type: Number,
        required: true,
    },
    minute: {
        type: Number,
        required: true,
    },
});
const inputDataSchema = new Schema({
    id: String,
    name: String,
    birthdate: dateSchema,
    birthcity: String,
    gender: {
        type: String,
        required: true,
    },
    livingcity: String,
});
const ageSchema = new Schema({
    year: Number,
    month: Number,
});
const directionSchema = new Schema({
    shortName: String,
    fullName: String,
});
const chartDataSchema = new Schema({
    BULL: Number,
    TIGER: Number,
    RABBIT: Number,
    MONKEY: Number,
    DRAGON: Number,
    RAT: Number,
    DOG: Number,
    ROOSTER: Number,
    PIG: Number,
    HORSE: Number,
    SNAKE: Number,
    GOAT: Number,
});
const genderCountSchema = new Schema({
    male: Number,
    female: Number,
});
const lineChartDataPartSchema = new Schema({
    value: Number,
    date: String,
});
const lineChartDataSchema = new Schema({
    year: [lineChartDataPartSchema],
    month: [lineChartDataPartSchema],
    day: [lineChartDataPartSchema],
});
const cardSchema = new Schema({
    id: String,
    name: String,
    birthdate: dateSchema,
    birthcity: String,
    gender: String,
    livingcity: String,
    age: ageSchema,
    year: outputDatePartSchema,
    month: outputDatePartSchema,
    day: outputDatePartSchema,
    hour: outputDatePartSchema,
    lineChartData: lineChartDataSchema,
    currentPillar: outputPillarSchema,
    pillars: [outputPillarSchema],
    movedDirection: directionSchema,
    direction: directionSchema,
    mainElement: mainElementSchema,
    cardStrength: cardStrengthSchema,
    chartData: chartDataSchema,
    fallingStars: [fallingStarSchema],
    genderCount: genderCountSchema,
    momCardId: String,
    dadCardId: String,
});
const userSchema = new Schema({
    id: String,
    token: String,
    name: String,
    mail: String,
    livingcity: String,
    birthcity: String,
    UTC: Number,
    cards: [cardSchema],
});
exports.UserModel = mongoose_1.default.model("User", userSchema, "Users");
exports.CardModel = mongoose_1.default.model("Card", inputDataSchema, "Cards");
//# sourceMappingURL=Schemas.js.map