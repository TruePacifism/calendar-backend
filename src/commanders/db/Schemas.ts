import mongoose from "mongoose";

const { Schema } = mongoose;

const elementSchema = new Schema({
  name: String,
});
const citySchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  UTC: {
    type: Number,
    required: true,
  },
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
  birthcity: citySchema,
  gender: {
    type: String,
    required: true,
  },
  livingcity: citySchema,
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
const offsetSchema = new Schema({
  year: Number,
  month: Number,
  pillar: Number,
});
const cardSchema = new Schema({
  id: String,
  name: String,
  offset: offsetSchema,
  chineseBirthdate: dateSchema,
  trueBirthdate: dateSchema,
  birthdate: dateSchema,
  birthcity: citySchema,
  gender: String,
  date: Date,
  livingcity: citySchema,
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
  firstName: String,
  secondName: {
    type: String,
    requred: false,
  },
  thirdName: {
    type: String,
    requred: false,
  },
  mail: String,
  livingcity: citySchema,
  birthcity: citySchema,
  UTC: Number,
  cards: [cardSchema],
});

export const UserModel = mongoose.model("User", userSchema, "Users");
export const CardModel = mongoose.model("Card", inputDataSchema, "Cards");
