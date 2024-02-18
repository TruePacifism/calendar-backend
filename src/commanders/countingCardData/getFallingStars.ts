import { Animals, Directions, MainElements, isDateInRange } from "../../enums";
import { animalsCounted, dateType, fallingStarType } from "../../types";

type propsType = {
  birthdate: dateType;
  animals: animalsCounted;
};

const starsInfo = [
  {
    element: MainElements.WATER,
    side: Directions.N,
    goods: ["мудрость", "коммуникабельность", "общительность"],
    bads: ["бесплодие", "импотенция", "слепота"],
  },
  {
    element: MainElements.EARTH,
    side: Directions.SW,
    goods: ["богатство", "рост", "плодородие"],
    bads: ["болезни", "проблемы пищеварения", "жадность"],
  },
  {
    element: MainElements.WOOD,
    side: Directions.E,
    goods: ["прогресс", "развитие", "лидерство", "деньги"],
    bads: ["ссоры", "ограбления", "дисгармония"],
  },
  {
    element: MainElements.WOOD,
    side: Directions.SE,
    goods: ["успехи в учебе", "культура", "поэтический талант", "романтика"],
    bads: ["измены", "обманы", "сексуальные скандалы"],
  },
  {
    element: MainElements.EARTH,
    side: Directions.C,
    goods: ["власть", "авторитет", "тоталитарность"],
    bads: ["разрушение", "неудачи", "катастрофы", "эпидемии"],
  },
  {
    element: MainElements.METAL,
    side: Directions.NW,
    goods: ["удача в бизнесе", "на гос.службе", "в науке"],
    bads: ["потеря славы", "влияния", "бесплодие", "одиночество"],
  },
  {
    element: MainElements.METAL,
    side: Directions.W,
    goods: [
      "талант оратора",
      "способности к языкам",
      "эзотерике",
      "астрологии",
      "красота",
      "богатство",
    ],
    bads: [
      "ранения",
      "разрушения",
      "потери",
      "пожары",
      "проституция",
      "судебные тяжбы",
      "травмы",
    ],
  },
  {
    element: MainElements.EARTH,
    side: Directions.NE,
    goods: ["финансовая удача", "духовность", "лидерство", "быстрый успех"],
    bads: ["болезни"],
  },
  {
    element: MainElements.FIRE,
    side: Directions.S,
    goods: ["слава", "известность", "риск", "благотворительность"],
    bads: ["подлость", "пожары"],
  },
];

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
    (new Date(year, month === -1 ? 0 : month, day === -1 ? 1 : day).getTime() -
      new Date(year, 0, 1).getTime()) /
      1000 /
      3600 /
      24
  );
  const fallingStars: fallingStarType[] = [];
  let yearOffset = (year + 0) % 9;
  let monthOffset = (month + ((year - 100) % 3) * 3) % 9;
  if (
    isDateInRange(
      { day, month },
      { day: 0, month: 0 },
      Animals.TIGER.monthBounds.firstType.start
    )
  ) {
    yearOffset += 8;
    yearOffset %= 9;
  }
  if (Object.values(Animals)[month] !== animals.month) {
    monthOffset += 8;
    monthOffset %= 9;
  }
  exampleStars.forEach((exampleStar) => {
    const yearNumber = exampleStar.year - yearOffset + 1;
    const monthNumber =
      month === -1 ? -10 : exampleStar.month - monthOffset + 1;

    fallingStars.push({
      yearNumber: yearNumber > 0 ? yearNumber : yearNumber + 9,
      monthNumber: monthNumber > 0 ? monthNumber : monthNumber + 9,
      ...starsInfo[yearNumber > 0 ? yearNumber - 1 : yearNumber + 9 - 1],
    });
  });
  return fallingStars;
}
