import mongoose from "mongoose";

const { Schema } = mongoose;

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
  year: Number,
  month: Number,
  day: Number,
  hour: Number,
  minute: Number,
});

const inputDataSchema = new Schema({
  id: String,
  name: String,
  birthdate: dateSchema,
  birthcity: String,
  gender: String,
  livingcity: String,
});

const userSchema = new Schema({
  id: String,
  token: String,
  name: String,
  mail: String,
  password: String,
  cards: [inputDataSchema],
});

export const UserModel = mongoose.model("User", userSchema, "Users");
export const CardModel = mongoose.model("Card", inputDataSchema, "Cards");
