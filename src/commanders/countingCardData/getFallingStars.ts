import { Animals } from "../../enums";
import { animalsCounted, dateType, fallingStarType } from "../../types";

type propsType = {
  birthdate: dateType;
  animals: animalsCounted;
};
const exampleStars: { year: number; month: number }[] = [
  {
    year: 0,
    month: 7,
  },
  {
    year: 5,
    month: 3,
  },
  {
    year: 7,
    month: 5,
  },
  {
    year: 8,
    month: 6,
  },
  {
    year: 1,
    month: 8,
  },
  {
    year: 3,
    month: 1,
  },
  {
    year: 4,
    month: 2,
  },
  {
    year: 6,
    month: 4,
  },
  {
    year: 2,
    month: 0,
  },
];

export default function getFallingStars({
  birthdate,
  animals,
}: propsType): fallingStarType[] {
  const { year, month, day } = birthdate;
  const dayOfYear = Math.floor(
    (new Date(year, month, day).getTime() - new Date(year, 0, 1).getTime()) /
      1000 /
      3600 /
      24
  );
  const fallingStars: fallingStarType[] = [];
  let yearOffset = (year + 0) % 9;
  let monthOffset = (month + ((year - 100) % 3) * 3) % 9;
  if (dayOfYear < Animals.TIGER.monthBounds.start) {
    yearOffset += 8;
    yearOffset %= 9;
  }
  if (Object.values(Animals)[month] !== animals.month) {
    monthOffset += 8;
    monthOffset %= 9;
  }
  exampleStars.forEach((exampleStar) => {
    const yearNumber = exampleStar.year - yearOffset + 1;
    const monthNumber = exampleStar.month - monthOffset + 1;
    fallingStars.push({
      yearNumber: yearNumber > 0 ? yearNumber : yearNumber + 9,
      monthNumber: monthNumber > 0 ? monthNumber : monthNumber + 9,
    });
  });
  return fallingStars;
}
