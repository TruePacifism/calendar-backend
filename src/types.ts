export type animalName =
  | "BULL"
  | "TIGER"
  | "RABBIT"
  | "ROOSTER"
  | "PIG"
  | "DOG"
  | "SNAKE"
  | "HORSE"
  | "GOAT"
  | "RAT"
  | "DRAGON"
  | "MONKEY";
export type coordinatesType = {
  lat: number;
  lng: number;
};
export type dateType = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
};
export type customEnumType<T> = {
  [key: string]: T;
};
export type elementType = {
  name: string;
};
export type animalType = {
  name: string;
  monthBounds: {
    start: number;
    end: number;
  };
  element: elementType;
};
export type mainElementType = {
  name: string;
  animals: animalType[];
  elements: [elementType, elementType];
};
export type pillarType = {
  animal: animalType;
  element: elementType;
  year: number;
  month: number;
  ageYear: number;
  ageMonth: number;
};
export type collisionTargetTimeType = "День" | "Месяц" | "Год" | "Час";
export type collisionTargetNameType =
  | "mom"
  | "dad"
  | "card"
  | "pillar"
  | "otherCard";
export type collisionTarget = {
  animal: animalType;
  targetName: collisionTargetNameType;
  targetTime: collisionTargetTimeType;
  value: string;
};
export type collisionShapeType =
  | "circle"
  | "rhombus"
  | "half"
  | "heart"
  | "rectangle";
export type collisionColor =
  | "red"
  | "lightgreen"
  | "darkgreen"
  | "purple"
  | "brown"
  | "yellow"
  | "blue"
  | "lightblue";
export type collisionType = {
  id: number;
  shape: collisionShapeType;
  color: collisionColor;
  secondTarget: collisionTarget;
  thirdTarget?: collisionTarget;
  kind: string;
  description: string;
};
export type animalsCounted = {
  year: animalType;
  month: animalType;
  day: animalType;
  hour: animalType;
};
export type elementsCounted = {
  year: elementType;
  month: elementType;
  day: elementType;
  hour: elementType;
};

export type genderType = "male" | "female";
export type inputDataType = {
  name: string;
  birthdate: dateType;
  birthcity: string;
  gender: genderType;
  livingcity: string;
};
export type outputAnimalType = {
  name: string;
  collisions: collisionType[];
  isGood: boolean;
  isBlack: boolean;
};
export type fallingStarType = {
  yearNumber: number;
  monthNumber: number;
};

export type cardStrengthType = {
  power: number;
  powerDescription: string;
  powerfulElements: mainElementType[];
  maxPower: number;
  leader?: mainElementType;
};
export type outputElementType = {
  name: string;
  isGood: boolean;
  isBlack: boolean;
};
export type outputPillarType = pillarType & {
  animal: outputAnimalType;
  element: outputElementType;
};
export type parentChartInfoType = {
  BULL: number;
  TIGER: number;
  RABBIT: number;
  MONKEY: number;
  DRAGON: number;
  RAT: number;
  DOG: number;
  ROOSTER: number;
  PIG: number;
  HORSE: number;
  SNAKE: number;
  GOAT: number;
};

export type outputDatePartType = {
  animal: outputAnimalType;
  element: elementType;
  name: string;
};
export type outputDataType = inputDataType & {
  year: outputDatePartType;
  month: outputDatePartType;
  day: outputDatePartType;
  hour: outputDatePartType;
  currentPillar: pillarType;
  pillars: pillarType[];
  mainElement: mainElementType;
  cardStrength: cardStrengthType;
  fallingStars: fallingStarType[];
  momCardId?: number;
  dadCardId?: number;
};
