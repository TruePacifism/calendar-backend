import { Animals } from "../../enums";
import { animalType, lineChartDataType } from "../../types";
import getAnimals from "./getAnimals";

type propsType = {
  year: animalType;
  month: animalType;
  day: animalType;
};

const animalsOrder = [
  Animals.BULL,
  Animals.TIGER,
  Animals.RABBIT,
  Animals.DRAGON,
  Animals.SNAKE,
  Animals.HORSE,
  Animals.GOAT,
  Animals.MONKEY,
  Animals.ROOSTER,
  Animals.DOG,
  Animals.PIG,
  Animals.RAT,
];

const getAnimalValue = (
  animalBirth: animalType,
  animalNow: animalType
): number => {
  if (animalBirth === Animals.NULL_ANIMAL) {
    return null;
  }
  const indexAnimalBirth: number = animalsOrder.findIndex(
    (animal) => animal.name === animalBirth.name
  );
  const indexAnimalNow: number = animalsOrder.findIndex(
    (animal) => animal.name === animalNow.name
  );
  const indexDiff: number = Math.abs(indexAnimalBirth - indexAnimalNow);
  const value: number = indexDiff > 6 ? indexDiff - 6 : indexDiff;
  return value;
};

export default function getLineChartData({
  year,
  month,
  day,
}: propsType): lineChartDataType {
  const now = new Date();
  const nowAnimals = getAnimals({
    birthdate: {
      year: now.getFullYear(),
      month: now.getMonth(),
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
    },
  });
  const yearValue = getAnimalValue(year, nowAnimals.year);
  const monthValue = (getAnimalValue(month, nowAnimals.month) * 2) / 3;
  const dayValue = (getAnimalValue(day, nowAnimals.day) * 1) / 3;
  const result: lineChartDataType = {
    year: [
      {
        date: now.getFullYear(),
        value: yearValue,
      },
    ],
    month: [
      {
        date: now.getMonth(),
        value: monthValue,
      },
    ],
    day: [
      {
        date: now.getDate(),
        value: dayValue,
      },
    ],
  };
  return result;
}
