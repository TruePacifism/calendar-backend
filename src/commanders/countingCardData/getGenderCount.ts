import { Animals } from "../../enums";
import {
  animalType,
  animalsCounted,
  genderCountType,
  genderType,
  pillarType,
} from "../../types";

type propsType = {
  animals: animalsCounted;
  currentPillar: pillarType;
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
  currentPillar,
}: propsType): genderCountType {
  const genderCount: genderCountType = {
    female: 0,
    male: 0,
  };
  const yearGender = getGenderByAnimal(animals.year);
  genderCount[yearGender] +=
    animals.month === Animals.BULL || animals.month === Animals.TIGER ? 15 : 25;
  const monthGender = getGenderByAnimal(animals.month);
  genderCount[monthGender] +=
    animals.month === Animals.BULL || animals.month === Animals.TIGER ? 25 : 15;
  const dayGender = getGenderByAnimal(animals.day);
  genderCount[dayGender] += 7.5;
  const hourGender = getGenderByAnimal(animals.hour);
  genderCount[hourGender] += 2.5;
  // const pillarGender = getGenderByAnimal(currentPillar.animal);
  // genderCount[pillarGender] += 2.5;
  const sum = genderCount.female + genderCount.male;
  genderCount.female = Math.round((genderCount.female / sum) * 100);
  genderCount.male = Math.round((genderCount.male / sum) * 100);
  return genderCount;
}
