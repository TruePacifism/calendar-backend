import { MainElements } from "../../enums";
import {
  animalsCounted,
  cardStrengthType,
  elementsCounted,
  mainElementType,
} from "../../types";

type propsType = {
  animals: animalsCounted;
  elements: elementsCounted;
  mainElement: mainElementType;
};

export default function getCardStrength({
  animals,
  elements,
  mainElement,
}: propsType): cardStrengthType {
  const powerfulElements = Object.values(MainElements).filter(
    (mainElementItem, idx) =>
      mainElementItem === mainElement ||
      Object.values(MainElements)[(idx + 4) % 5] === mainElement
  );
  let power = -1;
  let maxPower = -1;
  Object.values(animals).forEach((animal) => {
    if (
      powerfulElements[0].animals.includes(animal) ||
      powerfulElements[1].animals.includes(animal)
    ) {
      power += 1;
    }
    maxPower += 1;
  });
  Object.values(elements).forEach((element) => {
    if (
      powerfulElements[0].elements.includes(element) ||
      powerfulElements[1].elements.includes(element)
    ) {
      power += 1;
    }
    maxPower += 1;
  });
  let powerDescription;
  if (power < maxPower / 2) {
    powerDescription = "Слабая";
  }
  if (power >= maxPower / 2) {
    powerDescription = "Сильная";
  }
  if (power === 0) {
    powerDescription = "Сверхслабая";
  }
  if (power === maxPower) {
    powerDescription = "Сверхсильная";
  }
  return {
    power,
    powerfulElements,
    maxPower,
    powerDescription,
  };
}
