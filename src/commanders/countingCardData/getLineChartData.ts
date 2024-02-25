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
  birthdate: dateType;
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
  const indexDiff: number =
    indexAnimalBirth > indexAnimalNow
      ? indexAnimalBirth - indexAnimalNow
      : indexAnimalNow - indexAnimalBirth;
  const indexDiffMinimal: number = indexDiff > 6 ? 12 - indexDiff : indexDiff;
  const value: number = Math.abs(indexDiffMinimal - 6) - 3;
  // console.log(
  //   `Животное рождения: ${animalBirth.name}
  //   Животное для сравнения: ${animalNow.name}
  //   Разница: ${indexDiff}
  //   Минимальная разница: ${indexDiffMinimal}
  //   Результат: ${value}`
  // );

  return value;
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

const dateObjectToDate = (date: dateType): Date => {
  const { year, month, day, hour, minute } = date;
  return new Date(year, month, day, hour, minute);
};

export default function getLineChartData({
  year,
  month,
  day,
  birthdate,
}: propsType): lineChartDataType {
  const start = dateObjectToDate(birthdate);
  const yearNowValue = getAnimalValue(
    year,
    getAnimals({ birthdate: dateToObject(start) }).year
  );
  const monthNowValue = getAnimalValue(
    month,
    getAnimals({ birthdate: dateToObject(start) }).month
  );
  const startYearsDate = start;
  const yearValues: lineChartDataPartType[] = [];
  const startMonthDate: Date = addMonths(start, -4);
  const monthValues: lineChartDataPartType[] = [];
  const startDaysDate: Date = addDays(start, -4);
  const dayValues: lineChartDataPartType[] = [];
  for (let i = 1; i <= 120; i++) {
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

    if (i < 10) {
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
  }
  const nowYear = new Date().getFullYear();
  const result: lineChartDataType = {
    life: yearValues,
    year: yearValues.filter((value) => Math.abs(nowYear - value.date) < 5),
    month: monthValues,
    day: dayValues,
  };
  console.log(result);

  return result;
}
