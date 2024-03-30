import { Animals, Elements, isDateInRange } from "../../enums";
import {
  animalsCounted,
  dateType,
  elementType,
  elementsCounted,
  offsetType,
} from "../../types";

type propsType = {
  birthdate: dateType;
  animals: animalsCounted;
  offset?: offsetType;
};

function getDayOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const timeDiff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  return dayOfYear;
}

const exampleDate = new Date(100, 0, 1, 1, 0);

const getYear = (
  year: number,
  month: number,
  day: number,
  offset: number
): elementType => {
  const index = year % 10;
  if (day === -1 || month === -1) {
    return Object.values(Elements)[index];
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
  let indexWithOffset = trueIndex + 10 + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 10;
  }
  while (indexWithOffset >= 10) {
    indexWithOffset %= 10;
  }
  return Object.values(Elements)[indexWithOffset];
};
const getMonth = (
  date: Date,
  animals: animalsCounted,
  offset: number
): elementType => {
  const yearDifference = date.getFullYear() - exampleDate.getFullYear();
  const monthDifference =
    date.getMonth() - exampleDate.getMonth() + yearDifference * 12;

  const trueMonthDifference =
    Object.values(Animals)[date.getMonth()] === animals.month
      ? monthDifference
      : monthDifference - 1;
  const index = trueMonthDifference % 10;
  let indexWithOffset = index + 7 + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 10;
  }
  while (indexWithOffset >= 10) {
    indexWithOffset %= 10;
  }

  return Object.values(Elements)[indexWithOffset];
};
const getDay = (date: Date, offset: number): elementType => {
  const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
  const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
  const index = dayCount % 10;
  let indexWithOffset = index + 7 + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 10;
  }
  while (indexWithOffset >= 10) {
    indexWithOffset %= 10;
  }

  return Object.values(Elements)[indexWithOffset];
};
const getHour = (date: Date, offset: number): elementType => {
  console.log("date", date);

  const timeDiff = date.getTime() - exampleDate.getTime(); // Вычисляем разницу во времени в миллисекундах
  const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разделим разницу на количество миллисекунд в одном дне и округлим результат до целого числа
  const index =
    (Math.ceil((date.getHours() - 1) / 2) + (dayCount % 5) * 2) % 10;
  let indexWithOffset = index - 1 + offset;
  while (indexWithOffset < 0) {
    indexWithOffset += 10;
  }
  while (indexWithOffset >= 10) {
    indexWithOffset %= 10;
  }

  return Object.values(Elements)[indexWithOffset];
};

export default function getElements({
  birthdate,
  animals,
  offset,
}: propsType): elementsCounted {
  const { year, month, day, hour, minute } = birthdate;
  console.log(birthdate);

  const dateObject = new Date(
    Date.UTC(
      year,
      month === -1 ? 0 : month,
      day === -1 ? 1 : day,
      hour === -1 ? 1 : hour,
      minute === -1 ? 1 : minute
    )
  );
  console.log(dateObject);

  const yearElement = getYear(year, month, day, offset ? offset.year : 0);
  const monthElement =
    month === -1
      ? Elements.NULL_ELEMENT
      : getMonth(dateObject, animals, offset ? offset.month : 0);
  const dayElement = day === -1 ? Elements.NULL_ELEMENT : getDay(dateObject, 0);
  const hourElement =
    hour === -1 ? Elements.NULL_ELEMENT : getHour(dateObject, 0);
  return {
    year: yearElement,
    month: monthElement,
    day: dayElement,
    hour: hourElement,
  };
}
