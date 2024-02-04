import { Animals, Elements, isDateInRange } from "../../enums";
import {
  animalsCounted,
  dateType,
  elementType,
  elementsCounted,
} from "../../types";

type propsType = {
  birthdate: dateType;
  animals: animalsCounted;
};

function getDayOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const timeDiff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  return dayOfYear;
}

const exampleDate = new Date(100, 0, 1, 0, 0);

const getYear = (year: number, month: number, day: number): elementType => {
  const index = year % 10;
  if (day === -1 || month === -1) {
    return Object.values(Elements)[index];
  }
  const trueIndex = isDateInRange(
    { day, month },
    { day: 0, month: 0 },
    Animals.TIGER.monthBounds.firstType.start
  )
    ? index - 1
    : index;
  const indexWithOffset = (trueIndex + 10) % 10;
  return Object.values(Elements)[indexWithOffset];
};
const getMonth = (date: Date, animals: animalsCounted): elementType => {
  const yearDifference = date.getFullYear() - exampleDate.getFullYear();
  const monthDifference =
    date.getMonth() - exampleDate.getMonth() + yearDifference * 12;

  const trueMonthDifference =
    Object.values(Animals)[date.getMonth()] === animals.month
      ? monthDifference
      : monthDifference - 1;
  const index = trueMonthDifference % 10;
  const indexWithOffset = (index + 7) % 10;
  return Object.values(Elements)[indexWithOffset];
};
const getDay = (date: Date): elementType => {
  const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
  const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
  const index = dayCount % 10;
  const indexWithOffset = (index + 7) % 10;
  return Object.values(Elements)[indexWithOffset];
};
const getHour = (date: Date): elementType => {
  const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
  const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
  const index = (Math.ceil(date.getHours() / 2) + (dayCount % 5) * 2) % 10;
  const indexWithOffset = index % 10;
  return Object.values(Elements)[indexWithOffset];
};

export default function getElements({
  birthdate,
  animals,
}: propsType): elementsCounted {
  const { year, month, day, hour, minute } = birthdate;

  const dateObject = new Date(
    year,
    month === -1 ? 0 : month,
    day === -1 ? 1 : day,
    hour === -1 ? 1 : hour,
    minute === -1 ? 1 : minute
  );

  const yearElement = getYear(year, month, day);
  const monthElement =
    month === -1 ? Elements.NULL_ELEMENT : getMonth(dateObject, animals);
  const dayElement = day === -1 ? Elements.NULL_ELEMENT : getDay(dateObject);
  const hourElement = hour === -1 ? Elements.NULL_ELEMENT : getHour(dateObject);
  return {
    year: yearElement,
    month: monthElement,
    day: dayElement,
    hour: hourElement,
  };
}
