import {
  animalsCounted,
  blackInfoType,
  collisionsInfoType,
  countedCardDataType,
  dateType,
  elementsCounted,
  goodInfoType,
  outputDataType,
  outputDatePartType,
  outputPillarType,
  pillarType,
  todayDataType,
} from "../../types";

type propsType = {
  data: countedCardDataType;
};

const getPrettierAnimalsElements = ({
  animals,
  elements,
  currentPillar,
  blackInfo,
  goodInfo,
  collisionsInfo,
  birthdate,
}: {
  animals: animalsCounted;
  elements: elementsCounted;
  currentPillar: pillarType;
  blackInfo: blackInfoType;
  goodInfo: goodInfoType;
  collisionsInfo: collisionsInfoType;
  birthdate: dateType;
}): {
  year: outputDatePartType;
  month: outputDatePartType;
  day: outputDatePartType;
  hour: outputDatePartType;
  currentPillar: outputPillarType;
} => {
  return {
    year: {
      animal: {
        name: animals.year.name,
        isBlack: blackInfo.year.isAnimalBlack,
        isGood: goodInfo.year.isAnimalGood,
        collisions: collisionsInfo.year,
      },
      element: {
        name: elements.year.name,
        isBlack: blackInfo.year.isElementBlack,
        isGood: goodInfo.year.isElementGood,
      },
      name: birthdate.year.toString(),
    },
    month: {
      animal: {
        name: animals.month.name,
        isBlack: blackInfo.month.isAnimalBlack,
        isGood: goodInfo.month.isAnimalGood,
        collisions: collisionsInfo.month,
      },
      element: {
        name: elements.month.name,
        isBlack: blackInfo.month.isElementBlack,
        isGood: goodInfo.month.isElementGood,
      },
      name: birthdate.month.toString(),
    },
    day: {
      animal: {
        name: animals.day.name,
        isBlack: blackInfo.day.isAnimalBlack,
        isGood: goodInfo.day.isAnimalGood,
        collisions: collisionsInfo.day,
      },
      element: {
        name: elements.day.name,
        isBlack: blackInfo.day.isElementBlack,
        isGood: goodInfo.day.isElementGood,
      },
      name: birthdate.day.toString(),
    },
    hour: {
      animal: {
        name: animals.hour.name,
        isBlack: blackInfo.hour.isAnimalBlack,
        isGood: goodInfo.hour.isAnimalGood,
        collisions: collisionsInfo.hour,
      },
      element: {
        name: elements.hour.name,
        isBlack: blackInfo.hour.isElementBlack,
        isGood: goodInfo.hour.isElementGood,
      },
      name: birthdate.hour.toString(),
    },
    currentPillar: currentPillar
      ? {
          ...currentPillar,
          animal: {
            name: currentPillar.animal.name,
            isBlack: blackInfo.currentPillar.isAnimalBlack,
            isGood: goodInfo.currentPillar.isAnimalGood,
            collisions: collisionsInfo.currentPillar,
          },
          element: {
            name: currentPillar.element.name,
            isBlack: blackInfo.currentPillar.isElementBlack,
            isGood: goodInfo.currentPillar.isElementGood,
          },
        }
      : null,
  };
};

const getPrettierPillars = ({
  pillars,
}: {
  pillars: pillarType[];
}): outputPillarType[] => {
  return pillars.map((pillar) => {
    const prettierPillar: outputPillarType = {
      ...pillar,
      animal: {
        name: pillar.animal.name,
        isBlack: false,
        isGood: false,
        collisions: [],
      },
      element: {
        name: pillar.element.name,
        isBlack: false,
        isGood: false,
      },
    };
    return prettierPillar;
  });
};

export default function toPrettierData({ data }: propsType): outputDataType {
  const {
    name,
    gender,
    age,
    livingcity,
    birthcity,
    birthdate,
    chartData,
    direction,
    animals,
    elements,
    pillars,
    lineChartData,
    movedDirection,
    currentPillar,
    mainElement,
    cardStrength,
    blackInfo,
    goodInfo,
    collisionsInfo,
    fallingStars,
    genderCount,
  } = data;
  const prettierAnimalsElements = getPrettierAnimalsElements({
    animals,
    elements,
    currentPillar,
    goodInfo,
    blackInfo,
    birthdate,
    collisionsInfo,
  });
  const prettierPillars = getPrettierPillars({ pillars });
  return {
    name,
    gender,
    livingcity,
    birthcity,
    birthdate,
    age,
    direction,
    movedDirection,
    lineChartData,
    ...prettierAnimalsElements,
    chartData,
    pillars: prettierPillars,
    mainElement,
    cardStrength,
    fallingStars,
    genderCount,
  };
}
