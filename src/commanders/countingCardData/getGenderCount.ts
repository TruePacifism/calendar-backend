import { Animals } from "../../enums";
import {
  animalType,
  animalsCounted,
  genderCountType,
  genderType,
} from "../../types";

type propsType = {
  animals: animalsCounted;
};

const getGenderByAnimal = (animal: animalType): genderType => {
  switch (animal) {
    case Animals.RAT:
    case Animals.TIGER:
    case Animals.DRAGON:
    case Animals.HORSE:
    case Animals.MONKEY:
    case Animals.DOG:
      return "male";
    case Animals.BULL:
    case Animals.SNAKE:
    case Animals.RABBIT:
    case Animals.PIG:
    case Animals.GOAT:
    case Animals.ROOSTER:
      return "female";
  }
};

export default function getGenderCount({
  animals,
}: propsType): genderCountType {
  const genderCount: genderCountType = {
    female: 0,
    male: 0,
  };
  const yearGender = getGenderByAnimal(animals.year);
  genderCount[yearGender] += 25;
  const monthGender = getGenderByAnimal(animals.month);
  genderCount[monthGender] += 15;
  const dayGender = getGenderByAnimal(animals.day);
  genderCount[dayGender] += 7.5;
  const hourGender = getGenderByAnimal(animals.hour);
  genderCount[hourGender] += 2.5;
  return genderCount;
}
