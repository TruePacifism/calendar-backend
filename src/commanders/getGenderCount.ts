import { Animals } from "../enums";
import { animalType, genderType } from "../types";

type propsType = {
  gender: genderType;
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

export default function getGenderCount({}: propsType) {}
