import { Animals, Elements } from "../../enums";
import {
  animalType,
  animalsCounted,
  elementType,
  elementsCounted,
  pillarType,
} from "../../types";

type propsType = {
  animals: animalsCounted;
  elements: elementsCounted;
  currentPillar: pillarType;
};

export default function getBlackInfo({
  animals,
  elements,
  currentPillar,
}: propsType) {
  const blackAnimals: animalType[] = [];
  switch (elements.year) {
    case Elements.METAL_IN:
    case Elements.METAL_YAN:
    case Elements.EARTH_IN:
      blackAnimals.push(Animals.RABBIT, Animals.DRAGON, Animals.SNAKE);
      break;
    case Elements.EARTH_YAN:
      blackAnimals.push(Animals.RAT, Animals.BULL, Animals.TIGER);
      break;
    case Elements.WOOD_IN:
    case Elements.WOOD_YAN:
      blackAnimals.push(Animals.HORSE, Animals.GOAT);
      break;
    case Elements.FIRE_IN:
    case Elements.FIRE_YAN:
    case Elements.WATER_IN:
    case Elements.WATER_YAN:
      blackAnimals.push(Animals.DRAGON, Animals.MONKEY);
      break;
  }
  const blackInfo = {
    year: {
      isAnimalBlack: false,
      isElementBlack: false,
    },
    month: {
      isAnimalBlack: false,
      isElementBlack: false,
    },
    day: {
      isAnimalBlack: false,
      isElementBlack: false,
    },
    hour: {
      isAnimalBlack: false,
      isElementBlack: false,
    },
    currentPillar: {
      isAnimalBlack: false,
      isElementBlack: false,
    },
  };
  if (blackAnimals.includes(animals.year)) {
    blackInfo.year.isAnimalBlack = true;
    blackInfo.year.isElementBlack = true;
  }
  if (blackAnimals.includes(animals.month)) {
    blackInfo.month.isAnimalBlack = true;
    blackInfo.year.isElementBlack = true;
  }
  if (currentPillar && blackAnimals.includes(currentPillar.animal)) {
    blackInfo.currentPillar.isAnimalBlack = true;
    blackInfo.year.isElementBlack = true;
  }
  return blackInfo;
}
