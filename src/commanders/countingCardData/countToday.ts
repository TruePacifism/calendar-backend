import { addDays, addHours } from "date-and-time";
import getCardData from "./getCardData";
import {
  animalsCounted,
  inputDataType,
  outputDataType,
  userInput,
  userType,
} from "../../types";
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
import getLineChartData from "./getLineChartData";
import getMainElement from "./getMainElement";
import getMovedDirection from "./getMovedDirection";
import getPillars from "./getPillars";
import toPrettierData from "./toPrettierData";
import getCityCoordinates from "./getCityCoordinates";

type propsType = {
  user: userType;
  dayOffset: number;
};

export default async function countToday({
  user,
  dayOffset,
}: propsType): Promise<outputDataType> {
  const { birthcity, livingcity, UTC } = user;
  const nowServer = new Date();
  console.log("nowServer", nowServer);

  const now = new Date(
    Date.UTC(
      nowServer.getUTCFullYear(),
      nowServer.getUTCMonth(),
      nowServer.getUTCDate(),
      nowServer.getUTCHours(),
      nowServer.getUTCMinutes()
    )
  );
  console.log("nowUTC", now);
  const newDate = addDays(addHours(now, UTC - 2), dayOffset);
  console.log("UTC", UTC);

  console.log("nowResult", newDate);
  const birthdate = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    day: newDate.getDate(),
    hour: newDate.getHours(),
    minute: newDate.getMinutes(),
  };
  const gender = "female";
  const inputData: inputDataType = {
    name: user.name,
    birthcity: user.birthcity,
    livingcity: user.livingcity,
    gender,
    birthdate,
  };
  const birthcityCoordinates = await getCityCoordinates({
    cityName: birthcity,
  });
  const livingcityCoordinates = await getCityCoordinates({
    cityName: livingcity,
  });
  const age = getAge({ birthdate });
  const animals: animalsCounted = getAnimals({ birthdate });
  const elements = getElements({ birthdate, animals: animals });
  const pillars = getPillars({
    trueBirthdate: birthdate,
    gender,
    animals,
    elements,
  });
  const currentPillar = null;
  const mainElement = getMainElement({ elements });
  const cardStrength = getCardStrength({ animals, elements, mainElement });
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
  const fallingStars = getFallingStars({ birthdate, animals });
  const genderCount = getGenderCount({ animals });
  const lineChartData = getLineChartData({
    year: animals.year,
    month: animals.month,
    day: animals.day,
  });
  const direction = getDirection({ birthdate });
  const prettierData = toPrettierData({
    data: {
      ...inputData,
      trueBirthdate: birthdate,
      date: new Date(),
      age,
      birthdate,
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
