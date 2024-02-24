import { animalsCounted, inputDataType, outputDataType } from "../../types";
import countDevTime from "./countDevTime";
import getAge from "./getAge";
import getAnimals from "./getAnimals";
import getBlackInfo from "./getBlackInfo";
import getCardStrength from "./getCardStrength";
import getChartData from "./getChartData";
import getChineseDate from "./getChineseDate";
import getCityCoordinates from "./getCityCoordinates";
import getCollisions from "./getCollisions";
import getCurrentPillar from "./getCurrentPillar";
import getDirection from "./getDirection";
import getElements from "./getElements";
import getFallingStars from "./getFallingStars";
import getGenderCount from "./getGenderCount";
import getGoodInfo from "./getGoodInfo";
import getLineChartData from "./getLineChartData";
import getMainElement from "./getMainElement";
import getMovedDirection from "./getMovedDirection";
import getPillars from "./getPillars";
import toPrettierData from "./toPrettierData";

export default async function getCardData(
  inputData: inputDataType
): Promise<outputDataType> {
  const isToday = inputData.name === "today";
  const { gender } = inputData;
  const date = new Date();
  const birthcityCoordinates = await getCityCoordinates({
    cityName: inputData.birthcity,
  });
  const livingcityCoordinates = await getCityCoordinates({
    cityName: inputData.livingcity,
  });
  const trueBirthdate = await countDevTime({
    birthdate: inputData.birthdate,
    birthcity: isToday ? inputData.livingcity : inputData.birthcity,
  });
  const age = getAge({ birthdate: trueBirthdate });
  const animals: animalsCounted = getAnimals({
    birthdate: trueBirthdate,
    offset: inputData.offset,
  });
  const elements = getElements({
    birthdate: trueBirthdate,
    animals: animals,
    offset: inputData.offset,
  });
  const chineseBirthdate = getChineseDate(trueBirthdate, animals);
  const pillars = getPillars({
    trueBirthdate,
    gender,
    animals,
    elements,
  });
  const currentPillar = isToday ? null : getCurrentPillar({ pillars });
  const mainElement = getMainElement({ elements });
  const lineChartData = getLineChartData({
    year: animals.year,
    month: animals.month,
    day: animals.day,
  });
  const cardStrength = getCardStrength({
    animals,
    elements,
    mainElement,
    currentPillar,
  });
  const blackInfo = getBlackInfo({ animals, elements, currentPillar });
  const goodInfo = getGoodInfo({
    animals,
    elements,
    currentPillar,
    cardStrength,
  });
  const movedDirection = await getMovedDirection({
    livingcityCoordinates,
    birthcityCoordinates,
  });
  const chartData = getChartData({ momId: "", dadId: "", animals, elements });
  const collisionsInfo = getCollisions({ animals, currentPillar, pillars });
  const fallingStars = getFallingStars({ birthdate: trueBirthdate, animals });
  const genderCount = getGenderCount({ animals, currentPillar });
  const direction = getDirection({ birthdate: chineseBirthdate });
  const prettierData = toPrettierData({
    data: {
      ...inputData,
      date,
      age,
      trueBirthdate,
      chineseBirthdate,
      animals,
      elements,
      chartData,
      direction,
      pillars,
      movedDirection,
      lineChartData,
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
