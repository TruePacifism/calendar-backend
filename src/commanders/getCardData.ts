import { MainElements } from "../enums";
import { animalsCounted, inputDataType } from "../types";
import countDevTime from "./countDevTime";
import getAnimals from "./getAnimals";
import getCardStrength from "./getCardStrength";
import getElements from "./getElements";
import getFallingStars from "./getFallingStars";
import getPillars from "./getPillars";

export default async function getCardData(inputData: inputDataType) {
  const { gender } = inputData;
  const trueBirthdate = await countDevTime(inputData);
  const animals: animalsCounted = getAnimals({ birthdate: trueBirthdate });
  const elements = getElements({ birthdate: trueBirthdate, animals: animals });
  const pillars = getPillars({
    birthdate: trueBirthdate,
    gender,
    animals,
    elements,
  });
  const fallingStars = getFallingStars({ birthdate: trueBirthdate, animals });
  const cardStrength = getCardStrength({ animals, elements });
  return {
    ...inputData,
    birthdate: trueBirthdate,
    // animals,
    // elements,
    // pillars,
    // fallingStars,
    cardStrength,
  };
}
