import { MainElements } from "../../enums";
import { animalsCounted, inputDataType, outputDataType } from "../../types";
import countDevTime from "./countDevTime";
import getAge from "./getAge";
import getAnimals from "./getAnimals";
import getBlackInfo from "./getBlackInfo";
import getCardStrength from "./getCardStrength";
import getChartData from "./getChartData";
import getCollisions from "./getCollisions";
import getCurrentPillar from "./getCurrentPillar";
import getDirection from "./getDirection";
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
  const birthdate = await countDevTime(inputData);
  const age = getAge({ birthdate });
  const animals: animalsCounted = getAnimals({ birthdate });
  const elements = getElements({ birthdate, animals: animals });
  const pillars = getPillars({
    birthdate,
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
  const chartData = getChartData({ momId: "", dadId: "", animals, elements });
  const collisionsInfo = getCollisions({ animals, currentPillar, pillars });
  const fallingStars = getFallingStars({ birthdate, animals });
  const genderCount = getGenderCount({ animals });
  const direction = getDirection({ birthdate });
  const prettierData = toPrettierData({
    data: {
      ...inputData,
      age,
      birthdate,
      animals,
      elements,
      chartData,
      direction,
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
