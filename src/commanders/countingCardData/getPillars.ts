import {
  Animals,
  Elements,
  countIsFirstYearBounds,
  isDateInRange,
} from "../../enums";
import {
  animalType,
  animalsCounted,
  dateType,
  elementType,
  elementsCounted,
  genderType,
  pillarType,
} from "../../types";
import daysBetweenDates from "../utils/daysBetweenDates";

type propsType = {
  trueBirthdate: dateType;
  gender: genderType;
  animals: animalsCounted;
  elements: elementsCounted;
};

const getDirection = (
  gender: genderType,
  yearElement: elementType,
  monthAnimal: animalType
): boolean => {
  if (monthAnimal === Animals.BULL) {
    return gender === "male";
  }
  if (monthAnimal === Animals.TIGER) {
    return gender === "female";
  }
  const direction: boolean =
    (gender === "male" && yearElement.name.includes("Ян")) ||
    (gender === "female" && yearElement.name.includes("Инь"));
  return direction;
};
const getDaysToCount = (
  direction: boolean,
  birthdate: dateType,
  monthAnimal: animalType
): number => {
  const birthdateObject = new Date(
    birthdate.year,
    birthdate.month,
    birthdate.day
  );
  const yearStartObject = new Date(birthdate.year, 0, 1);
  const daysOfYear = Math.ceil(
    (birthdateObject.getTime() - yearStartObject.getTime()) / 1000 / 3600 / 24
  );
  let daysToCount: number;

  const isFirstYearsBounds = countIsFirstYearBounds(birthdate.year);

  if (monthAnimal === Animals.RAT) {
    if (direction) {
      daysToCount = isDateInRange(
        { day: birthdate.day, month: birthdate.month },
        { day: 0, month: 0 },
        Animals.RAT.monthBounds.firstType.start
      )
        ? Animals.RAT.monthBounds.firstType.end.day - birthdate.day + 1
        : 31 - birthdate.day + Animals.RAT.monthBounds.firstType.end.day + 1;
    } else {
      daysToCount = isDateInRange(
        { day: birthdate.day, month: birthdate.month },
        Animals.RAT.monthBounds.firstType.start,
        { day: 11, month: 31 }
      )
        ? birthdate.day - Animals.RAT.monthBounds.firstType.start.day
        : 31 - Animals.RAT.monthBounds.firstType.start.day + birthdate.day;
    }
  } else {
    if (direction) {
      daysToCount =
        daysBetweenDates(
          { day: birthdate.day, month: birthdate.month },
          isFirstYearsBounds
            ? monthAnimal.monthBounds.firstType.end
            : monthAnimal.monthBounds.secondType.end,
          birthdate.year
        ) + 1;
    } else {
      daysToCount = daysBetweenDates(
        isFirstYearsBounds
          ? monthAnimal.monthBounds.firstType.start
          : monthAnimal.monthBounds.secondType.start,
        { day: birthdate.day, month: birthdate.month },
        birthdate.year
      );
    }
  }

  return daysToCount;
};

export default function getPillars({
  trueBirthdate: birthdate,
  gender,
  animals,
  elements,
}: propsType): pillarType[] {
  if (birthdate.day === -1 || birthdate.month === -1 || !gender) {
    return [];
  }
  const direction = getDirection(gender, elements.year, animals.month);
  const daysToCount = getDaysToCount(direction, birthdate, animals.month);
  const firstYear = birthdate.year;
  const firstMonth = birthdate.month;

  let year = firstYear + Math.floor(daysToCount / 3);
  let month = birthdate.month + (daysToCount % 3) * 4;
  if (month > 11) {
    year += 1;
    month %= 12;
  }
  let ageYear = year - birthdate.year;
  let ageMonth = month - birthdate.month;
  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }
  let animalIndex = Object.values(Animals).findIndex(
    (animal) => animal === animals.month
  );
  let elementIndex = Object.values(Elements).findIndex(
    (element) => element === elements.month
  );
  const pillars: pillarType[] = [];
  year -= 10;
  ageYear -= 10;

  if (direction) {
    animalIndex += 1;
    animalIndex %= 12;
    elementIndex += 1;
    elementIndex %= 10;
    const firstPillar: pillarType = {
      year: firstYear,
      month: firstMonth,
      ageYear: 0,
      ageMonth: 0,
      animal: Object.values(Animals)[animalIndex],
      element: Object.values(Elements)[elementIndex],
    };
    pillars.push(firstPillar);
    for (let i = 1; i < 13; i++) {
      year += 10;
      ageYear += 10;
      animalIndex += 1;
      animalIndex %= 12;
      elementIndex += 1;
      elementIndex %= 10;
      const newPillar: pillarType = {
        year,
        month,
        ageYear,
        ageMonth,
        animal: Object.values(Animals)[animalIndex],
        element: Object.values(Elements)[elementIndex],
      };
      pillars.push(newPillar);
    }
  } else {
    animalIndex += 11;
    animalIndex %= 12;
    elementIndex += 9;
    elementIndex %= 10;
    const firstPillar: pillarType = {
      year: firstYear,
      month: firstMonth,
      ageYear: 0,
      ageMonth: 0,
      animal: Object.values(Animals)[animalIndex],
      element: Object.values(Elements)[elementIndex],
    };
    pillars.push(firstPillar);
    for (let i = 1; i < 13; i++) {
      year += 10;
      ageYear += 10;
      animalIndex += 11;
      animalIndex %= 12;
      elementIndex += 9;
      elementIndex %= 10;
      const newPillar: pillarType = {
        year,
        month,
        ageYear,
        ageMonth,
        animal: Object.values(Animals)[animalIndex],
        element: Object.values(Elements)[elementIndex],
      };
      pillars.push(newPillar);
    }
  }
  return pillars;
}
