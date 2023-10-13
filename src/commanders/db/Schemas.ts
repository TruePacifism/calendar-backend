const mongoose = require("mongoose");

const { Schema } = mongoose;

const outputAnimalSchema = new Schema({
  name: String,
  collisions: [{ type: Schema.Types.ObjectId, ref: "collision" }],
  isGood: Boolean,
  isBlack: Boolean,
});

const pillarSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: "animal" },
  element: { type: Schema.Types.ObjectId, ref: "element" },
  year: Number,
  month: Number,
  ageYear: Number,
  ageMonth: Number,
});

const mainElementSchema = new Schema({
  name: String,
  animals: [{ type: Schema.Types.ObjectId, ref: "animal" }],
  elements: [{ type: Schema.Types.ObjectId, ref: "element" }],
});

const cardStrengthSchema = new Schema({
  power: Number,
  powerDescription: String,
  powerfulElements: [{ type: Schema.Types.ObjectId, ref: "mainElement" }],
  maxPower: Number,
  leader: { type: Schema.Types.ObjectId, ref: "mainElement" },
});

const fallingStarSchema = new Schema({
  yearNumber: Number,
  monthNumber: Number,
});

const outputDatePartSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: "outputAnimal" },
  element: { type: Schema.Types.ObjectId, ref: "element" },
  name: String,
});

const outputDataSchema = new Schema({
  year: outputDatePartSchema,
  month: outputDatePartSchema,
  day: outputDatePartSchema,
  hour: outputDatePartSchema,
  currentPillar: { type: Schema.Types.ObjectId, ref: "pillar" },
  pillars: [{ type: Schema.Types.ObjectId, ref: "pillar" }],
  mainElement: { type: Schema.Types.ObjectId, ref: "mainElement" },
  cardStrength: cardStrengthSchema,
  fallingStars: [fallingStarSchema],
  momCardId: String,
  dadCardId: String,
});

const outputAnimalModel = mongoose.model("outputAnimal", outputAnimalSchema);
const pillarModel = mongoose.model("pillar", pillarSchema);
const mainElementModel = mongoose.model("mainElement", mainElementSchema);
const cardStrengthModel = mongoose.model("cardStrength", cardStrengthSchema);
const fallingStarModel = mongoose.model("fallingStar", fallingStarSchema);
const outputDatePartModel = mongoose.model(
  "outputDatePart",
  outputDatePartSchema
);
const outputDataModel = mongoose.model("outputData", outputDataSchema);

module.exports = {
  outputAnimalModel,
  pillarModel,
  mainElementModel,
  cardStrengthModel,
  fallingStarModel,
  outputDatePartModel,
  outputDataModel,
};
