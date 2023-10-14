import { MainElements } from "../../enums";
import { animalsCounted, inputDataType, outputDataType } from "../../types";
import countDevTime from "./countDevTime";
import getAnimals from "./getAnimals";
import getBlackInfo from "./getBlackInfo";
import getCardStrength from "./getCardStrength";
import getCollisions from "./getCollisions";
import getCurrentPillar from "./getCurrentPillar";
import getElements from "./getElements";
import getFallingStars from "./getFallingStars";
import getGenderCount from "./getGenderCount";
import getGoodInfo from "./getGoodInfo";
import getMainElement from "./getMainElement";
import getPillars from "./getPillars";
import toPrettierData from "./toPrettierData";

export default async function getCardData(
  inputData: inputDataType
): Promise<outputDataType> {
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
  const currentPillar = getCurrentPillar({ pillars });
  const mainElement = getMainElement({ elements });
  const cardStrength = getCardStrength({ animals, elements, mainElement });
  const blackInfo = getBlackInfo({ animals, elements, currentPillar });
  const goodInfo = getGoodInfo({
    animals,
    elements,
    currentPillar,
    cardStrength,
  });
  const collisionsInfo = getCollisions({ animals, currentPillar, pillars });
  const fallingStars = getFallingStars({ birthdate: trueBirthdate, animals });
  const genderCount = getGenderCount({ animals });
  const prettierData = toPrettierData({
    data: {
      ...inputData,
      birthdate: trueBirthdate,
      animals,
      elements,
      pillars,
      mainElement,
      currentPillar,
      blackInfo,
      goodInfo,
      collisionsInfo,
      fallingStars,
      cardStrength,
      genderCount,
    },
  });
  return prettierData;
}
