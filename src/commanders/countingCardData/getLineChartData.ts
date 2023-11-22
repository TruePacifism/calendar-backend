import { addDays, addYears, addMonths } from "date-and-time";
import { Animals } from "../../enums";
import {
  animalType,
  dateType,
  lineChartDataPartType,
  lineChartDataType,
} from "../../types";
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
  return value - 6;
};

const dateToObject = (date: Date): dateType => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

export default function getLineChartData({
  year,
  month,
  day,
}: propsType): lineChartDataType {
  const now = new Date();
  const yearNowValue = getAnimalValue(
    year,
    getAnimals({ birthdate: dateToObject(now) }).year
  );
  const monthNowValue = getAnimalValue(
    month,
    getAnimals({ birthdate: dateToObject(now) }).month
  );
  const startYearsDate = addYears(now, -4);
  const yearValues: lineChartDataPartType[] = [];
  const startMonthDate: Date = addMonths(now, -4);
  const monthValues: lineChartDataPartType[] = [];
  const startDaysDate: Date = addDays(now, -4);
  const dayValues: lineChartDataPartType[] = [];
  for (let i = 1; i <= 9; i++) {
    // Вычисление данных по году
    const yearDate: Date = addYears(startYearsDate, i);
    const yearAnimal: animalType = getAnimals({
      birthdate: dateToObject(yearDate),
    }).year;
    const yearValue: number = getAnimalValue(year, yearAnimal);
    yearValues.push({
      date: yearDate.getFullYear(),
      value: yearValue,
    });

    // Вычисление данных по месяцу
    const monthDate: Date = addMonths(startMonthDate, i);
    const monthAnimal: animalType = getAnimals({
      birthdate: dateToObject(monthDate),
    }).month;
    const monthValue: number = getAnimalValue(month, monthAnimal);
    monthValues.push({
      date: monthDate.getMonth(),
      value: monthValue * (2 / 3) + yearNowValue,
    });

    //Вычисление данных по дню
    const dayDate: Date = addDays(startDaysDate, i);
    const dayAnimal: animalType = getAnimals({
      birthdate: dateToObject(dayDate),
    }).day;
    const dayValue: number = getAnimalValue(day, dayAnimal);
    dayValues.push({
      date: dayDate.getDate(),
      value: dayValue * (1 / 3) + monthNowValue * (2 / 3) + yearNowValue,
    });
  }
  const result: lineChartDataType = {
    year: yearValues,
    month: monthValues,
    day: dayValues,
  };
  return result;
}
