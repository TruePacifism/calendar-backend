import { Animals, countIsFirstYearBounds, isDateInRange } from "../../enums";
import {
  animalName,
  animalType,
  animalsCounted,
  dateType,
  outputDatePartType,
} from "../../types";

const exampleDate = new Date(100, 0, 1, 0, 0);

function getDayOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const timeDiff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  return dayOfYear;
}
type propsType = {
  birthdate: dateType;
  offset?: dateType;
};

const getYear = (
  year: number,
  month: number,
  day: number,
  offset: number
): animalType => {
  const index = year % 12;
  if (day === -1 || month === -1) {
    return Object.values(Animals)[index];
  }
  const trueIndex = isDateInRange(
    { day, month },
    { day: 0, month: 0 },
    {
      day: Animals.TIGER.monthBounds.firstType.start.day - 1,
      month: Animals.TIGER.monthBounds.firstType.start.month,
    }
  )
    ? index - 1
    : index;
  let indexWithOffset = trueIndex + 7 + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 12;
  }
  while (indexWithOffset > 11) {
    indexWithOffset %= 12;
  }

  return Object.values(Animals)[indexWithOffset];
};
const getMonth = (
  day: number,
  month: number,
  isFirstYearsBounds: boolean,
  offset: number
): animalType => {
  const index = Object.values(Animals).findIndex((animal) => {
    if (isFirstYearsBounds) {
      return isDateInRange(
        { day, month },
        animal.monthBounds.firstType.start,
        animal.monthBounds.firstType.end
      );
    } else {
      return isDateInRange(
        { day, month },
        animal.monthBounds.secondType.start,
        animal.monthBounds.secondType.end
      );
    }
  });
  let indexWithOffset = index + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 12;
  }
  while (indexWithOffset > 11) {
    indexWithOffset %= 12;
  }
  const animal = Object.values(Animals)[indexWithOffset];
  return animal ? animal : Animals.RAT;
};
const getDay = (
  year: number,
  month: number,
  day: number,
  offset: number
): animalType => {
  if (day == -1) {
    return Animals.NULL_ANIMAL;
  }
  const dateObject = new Date(year, month, day);
  const timeDiff = dateObject.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
  const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
  const index = dayCount % 12;
  let indexWithOffset = index + 5 + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 12;
  }
  while (indexWithOffset > 11) {
    indexWithOffset %= 12;
  }
  return Object.values(Animals)[indexWithOffset];
};

const getHour = (hour: number, offset: number): animalType => {
  let index = 0;
  switch (hour) {
    case 23:
    case 0:
      index = 11;
      break;
    case 1:
    case 2:
      index = 0;
      break;
    case 3:
    case 4:
      index = 1;
      break;
    case 5:
    case 6:
      index = 2;
      break;
    case 7:
    case 8:
      index = 3;
      break;
    case 9:
    case 10:
      index = 4;
      break;
    case 11:
    case 12:
      index = 5;
      break;
    case 13:
    case 14:
      index = 6;
      break;
    case 15:
    case 16:
      index = 7;
      break;
    case 17:
    case 18:
      index = 8;
      break;
    case 19:
    case 20:
      index = 9;
      break;
    case 21:
    case 22:
      index = 10;
      break;
    default:
      return Animals.NULL_ANIMAL;
  }
  let indexWithOffset = index + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 12;
  }
  while (indexWithOffset > 11) {
    indexWithOffset %= 12;
  }
  return Object.values(Animals)[indexWithOffset];
};
export default function getAnimals({
  birthdate,
  offset,
}: propsType): animalsCounted {
  const { year, month, day, hour, minute } = birthdate;
  const isFirstYearsBounds = countIsFirstYearBounds(year);

  const monthAnimal =
    day == -1
      ? Animals.NULL_ANIMAL
      : getMonth(day, month, isFirstYearsBounds, offset ? offset.month : 0);
  const yearAnimal = getYear(year, month, day, offset ? offset.year : 0);
  const dayAnimal = getDay(year, month, day, offset ? offset.day : 0);
  const hourAnimal = getHour(hour, offset ? offset.day : 0);

  return {
    year: yearAnimal,
    month: monthAnimal,
    day: dayAnimal,
    hour: hourAnimal,
  };
}
