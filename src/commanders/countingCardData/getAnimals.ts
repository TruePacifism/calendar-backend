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
};

const getYear = (year: number, month: number, day: number): animalType => {
  const index = year % 12;
  if (day === -1 || month === -1) {
    return Object.values(Animals)[index];
  }
  const trueIndex = isDateInRange(
    { day, month },
    { day: 0, month: 0 },
    Animals.TIGER.monthBounds.firstType.start
  )
    ? index - 1
    : index;
  const indexWithOffset = (trueIndex + 7) % 12;

  return Object.values(Animals)[indexWithOffset];
};
const getMonth = (
  day: number,
  month: number,
  isFirstYearsBounds: boolean
): animalType => {
  const animal = Object.values(Animals).find((animal) => {
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
  return animal ? animal : Animals.RAT;
};
const getDay = (year: number, month: number, day: number): animalType => {
  if (day == -1) {
    return Animals.NULL_ANIMAL;
  }
  const dateObject = new Date(year, month, day);
  const timeDiff = dateObject.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
  const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
  const index = dayCount % 12;
  const indexWithOffset = (index + 5) % 12;
  return Object.values(Animals)[indexWithOffset];
};

const getHour = (hour: number): animalType => {
  switch (hour) {
    case 23:
    case 0:
      return Animals.RAT;
    case 1:
    case 2:
      return Animals.BULL;
    case 3:
    case 4:
      return Animals.TIGER;
    case 5:
    case 6:
      return Animals.RABBIT;
    case 7:
    case 8:
      return Animals.DRAGON;
    case 9:
    case 10:
      return Animals.SNAKE;
    case 11:
    case 12:
      return Animals.HORSE;
    case 13:
    case 14:
      return Animals.GOAT;
    case 15:
    case 16:
      return Animals.MONKEY;
    case 17:
    case 18:
      return Animals.ROOSTER;
    case 19:
    case 20:
      return Animals.DOG;
    case 21:
    case 22:
      return Animals.PIG;
    default:
      return Animals.NULL_ANIMAL;
  }
};
export default function getAnimals({ birthdate }: propsType): animalsCounted {
  const { year, month, day, hour, minute } = birthdate;
  const isFirstYearsBounds = countIsFirstYearBounds(year);

  const monthAnimal =
    day == -1 ? Animals.NULL_ANIMAL : getMonth(day, month, isFirstYearsBounds);
  const yearAnimal = getYear(year, month, day);
  const dayAnimal = getDay(year, month, day);
  const hourAnimal = getHour(hour);

  return {
    year: yearAnimal,
    month: monthAnimal,
    day: dayAnimal,
    hour: hourAnimal,
  };
}
