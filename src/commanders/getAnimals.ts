import { Animals } from "../enums";
import { animalName, animalType, dateType } from "../types";

type propsType = {
  birthdate: dateType;
};

const getYear = (year: number): animalType => {
  const index = year % 12;
  return Animals[index];
};
const getMonth = (day: number): animalType => {
  const animal = Object.values(Animals).find(
    (animal) =>
      animal.monthBounds.start >= day && animal.monthBounds.end <= day
  );
  return animal;
};

export default function getAnimals({ birthdate }: propsType) {
  const { year, month, day, hour, minute } = birthdate;
  const yearAnimal = getYear(year);
}
