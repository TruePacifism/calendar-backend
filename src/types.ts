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
export type collisionTargetTimeType = "день" | "месяц" | "год" | "час" | "такт";
export type collisionTargetNameType =
  | "mom"
  | "dad"
  | "card"
  | "pillar"
  | "otherCard";
export type collisionTarget = {
  animal: animalType;
  targetTime: collisionTargetTimeType;
};
export type collisionShapeType =
  | "circle"
  | "rhombus"
  | "half"
  | "heart"
  | "rectangle";
export type collisionColorType =
  | "red"
  | "brown"
  | "darkGreen"
  | "purple"
  | "blue"
  | "pink"
  | "lightGreen"
  | "orange"
  | "lightBlue";
export type collisionKindType =
  | "Столкновение"
  | "Самонаказание"
  | "Наказание нелюбви"
  | "Наказание неблагодарности"
  | "Уничижающее наказание"
  | "Гармония трёх";

export type collisionType = {
  id: number;
  shape: collisionShapeType;
  color: collisionColorType;
  secondTarget: collisionTarget;
  thirdTarget?: collisionTarget;
  targetName: collisionTargetTimeType;
  kind: string;
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
export type genderCountType = {
  male: number;
  female: number;
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
export type outputPillarType = {
  year: number;
  month: number;
  ageYear: number;
  ageMonth: number;
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
export type blackInfoPartType = {
  isAnimalBlack: boolean;
  isElementBlack: boolean;
};
export type blackInfoType = {
  year: blackInfoPartType;
  month: blackInfoPartType;
  day: blackInfoPartType;
  hour: blackInfoPartType;
  currentPillar: blackInfoPartType;
};
export type goodInfoPartType = {
  isAnimalGood: boolean;
  isElementGood: boolean;
};
export type goodInfoType = {
  year: goodInfoPartType;
  month: goodInfoPartType;
  day: goodInfoPartType;
  hour: goodInfoPartType;
  currentPillar: goodInfoPartType;
};

export type collisionsInfoType = {
  year: collisionType[];
  month: collisionType[];
  day: collisionType[];
  hour: collisionType[];
  currentPillar: collisionType[];
};

export type ageType = {
  year: number;
  month: number;
};

export type directionType = {
  shortName: string;
  fullName: string;
};

export type countedCardDataType = inputDataType & {
  age: ageType;
  animals: animalsCounted;
  elements: elementsCounted;
  pillars: pillarType[];
  currentPillar: pillarType;
  mainElement: mainElementType;
  cardStrength: cardStrengthType;
  blackInfo: blackInfoType;
  movedDirection: directionType;
  chartData: parentChartInfoType;
  goodInfo: goodInfoType;
  direction: directionType;
  collisionsInfo: collisionsInfoType;
  fallingStars: fallingStarType[];
  genderCount: genderCountType;
};

export type outputDatePartType = {
  animal: outputAnimalType;
  element: outputElementType;
  name: string;
};
export type outputMainElementType = {};
export type outputDataType = inputDataType & {
  age: ageType;
  year: outputDatePartType;
  month: outputDatePartType;
  day: outputDatePartType;
  hour: outputDatePartType;
  currentPillar: outputPillarType;
  pillars: outputPillarType[];
  movedDirection: directionType;
  direction: directionType;
  mainElement: mainElementType;
  cardStrength: cardStrengthType;
  chartData: parentChartInfoType;
  fallingStars: fallingStarType[];
  genderCount: genderCountType;
  momCardId?: string;
  dadCardId?: string;
};

export type todayInputData = {
  city: string;
};

export type userInput = {
  name: string;
  token: string;
  password: string;
  mail: string;
};
