import { Animals, Elements, MainElements } from "../../enums";
import {
  animalsCounted,
  cardStrengthType,
  elementsCounted,
  mainElementType,
  pillarType,
} from "../../types";

type propsType = {
  animals: animalsCounted;
  elements: elementsCounted;
  currentPillar: pillarType;
  mainElement: mainElementType;
};

export default function getCardStrength({
  animals,
  elements,
  mainElement,
  currentPillar
}: propsType): cardStrengthType {
  const powerfulElements = Object.values(MainElements).filter(
    (mainElementItem, idx) => {
      return (
        mainElementItem === mainElement ||
        Object.values(MainElements)[(idx + 4) % 5] === mainElement
      );
    }
  );

  let power = -1;
  let maxPower = -1;
  Object.values(animals).forEach((animal) => {
    if (animal === Animals.NULL_ANIMAL) {
      return;
    }
    if (
      powerfulElements[0].animals.includes(animal) ||
      powerfulElements[1].animals.includes(animal)
    ) {
      power += 1;
    }
    maxPower += 1;
  });
  Object.values(elements).forEach((element) => {
    if (element === Elements.NULL_ELEMENT) {
      return;
    }
    if (
      powerfulElements[0].elements.includes(element) ||
      powerfulElements[1].elements.includes(element)
    ) {
      power += 1;
    }
    maxPower += 1;
  });
  // if (currentPillar && currentPillar.animal !== Animals.NULL_ANIMAL) {
  //   if (
  //     powerfulElements[0].animals.includes(currentPillar.animal) ||
  //     powerfulElements[1].animals.includes(currentPillar.animal)
  //   ) {
  //     power += 1;
  //   }
  //   maxPower += 1;
  // }
  // if (currentPillar && currentPillar.element !== Elements.NULL_ELEMENT) {
  //   if (
  //     powerfulElements[0].elements.includes(currentPillar.element) ||
  //     powerfulElements[1].elements.includes(currentPillar.element)
  //   ) {
  //     power += 1;
  //   }
  //   maxPower += 1;
  // }
  let powerDescription: string;
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
