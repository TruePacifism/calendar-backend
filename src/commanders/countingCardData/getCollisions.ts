import {
  animalType,
  animalsCounted,
  collisionColorType,
  collisionElementType,
  collisionKindType,
  collisionShapeType,
  collisionType,
  elementsCounted,
  pillarType,
} from "../../types";

type propsType = {
  animals: animalsCounted;
  currentPillar: pillarType;
  pillars: pillarType[];
};

const collisionsInfo: {
  animals: string[];
  shape: collisionShapeType;
  color: collisionColorType;
  secondColor?: collisionColorType;
  element?: collisionElementType;
  kind: collisionKindType;
}[] = [
  {
    animals: ["змея", "обезьяна", "тигр"].sort(),
    shape: "half-horizontal",
    color: "red",
    kind: "Наказание неблагодарности",
  },
  {
    animals: ["собака", "коза", "бык"].sort(),
    shape: "half-horizontal",
    color: "brown",
    kind: "Уничижающее наказание",
  },
  {
    animals: ["собака", "тигр", "лошадь"].sort(),
    shape: "triangle",
    color: "red",
    element: "Огонь",
    kind: "Гармония трёх",
  },
  {
    animals: ["кролик", "коза", "свинья"].sort(),
    shape: "triangle",
    color: "darkGreen",
    element: "Дерево",
    kind: "Гармония трёх",
  },
  {
    animals: ["змея", "бык", "петух"].sort(),
    shape: "triangle",
    color: "purple",
    element: "Металл",
    kind: "Гармония трёх",
  },
  {
    animals: ["обезьяна", "дракон", "крыса"].sort(),
    shape: "triangle",
    color: "blue",
    element: "Вода",
    kind: "Гармония трёх",
  },
  {
    animals: ["лошадь", "крыса"].sort(),
    shape: "half",
    color: "blue",
    secondColor: "red",
    kind: "Столкновение",
  },
  {
    animals: ["коза", "бык"].sort(),
    shape: "half",
    color: "lightBlue",
    secondColor: "orange",
    kind: "Столкновение",
  },
  {
    animals: ["тигр", "обезьяна"].sort(),
    shape: "half",
    color: "blue",
    secondColor: "brown",
    kind: "Столкновение",
  },
  {
    animals: ["кролик", "петух"].sort(),
    shape: "half",
    color: "lightGreen",
    secondColor: "pink",
    kind: "Столкновение",
  },
  {
    animals: ["змея", "свинья"].sort(),
    shape: "half",
    color: "lightGreen",
    secondColor: "lightBlue",
    kind: "Столкновение",
  },
  {
    animals: ["дракон", "собака"].sort(),
    shape: "half",
    color: "brown",
    secondColor: "purple",
    kind: "Столкновение",
  },
  {
    animals: ["дракон", "дракон"].sort(),
    shape: "half",
    color: "brown",
    kind: "Самонаказание",
  },
  {
    animals: ["петух", "петух"].sort(),
    shape: "half",
    color: "pink",
    kind: "Самонаказание",
  },
  {
    animals: ["лошадь", "лошадь"].sort(),
    shape: "half",
    color: "red",
    kind: "Самонаказание",
  },
  {
    animals: ["свинья", "свинья"].sort(),
    shape: "half",
    color: "lightBlue",
    kind: "Самонаказание",
  },
  {
    animals: ["кролик", "крыса"].sort(),
    shape: "heart",
    color: "red",
    kind: "Наказание нелюбви",
  },
];

const getTargetTime = (time: string) => {
  switch (time) {
    case "year":
      return "год";
    case "month":
      return "месяц";
    case "day":
      return "день";
    case "hour":
      return "час";
    case "currentPillar":
      return "такт";
  }
};

const getCollisionInfo = (
  firstAnimal: animalType,
  secondAnimal: animalType,
  thirdAnimal?: animalType
) => {
  if (!firstAnimal || !secondAnimal) {
    return;
  }
  const animalNames: string[] = thirdAnimal
    ? [firstAnimal, secondAnimal, thirdAnimal]
        .map((animal) => animal.name)
        .sort()
    : [firstAnimal, secondAnimal].map((animal) => animal.name).sort();

  const foundCollisionInfo = collisionsInfo.find(
    (collisionInfo) =>
      collisionInfo.animals.length === animalNames.length &&
      collisionInfo.animals.every(
        (animalName, idx) => animalNames[idx] === animalName
      )
  );
  if (foundCollisionInfo) {
    const { color, secondColor, kind, shape } = foundCollisionInfo;
    return { color, secondColor, kind, shape };
  }
};

export default function getCollisions({
  animals,
  currentPillar,
  pillars,
}: propsType) {
  const animalsList = currentPillar
    ? {
        ...animals,
        currentPillar: currentPillar.animal,
      }
    : animals;
  const collisionsInfo: {
    year: collisionType[];
    month: collisionType[];
    day: collisionType[];
    hour: collisionType[];
    currentPillar: collisionType[];
  } = {
    year: [],
    month: [],
    day: [],
    hour: [],
    currentPillar: [],
  };

  const times = Object.keys(collisionsInfo);
  const selectedTimes = {
    first: 0,
    second: 1,
    third: 2,
  };
  let id = 1;
  times.forEach((firstTime, idx) => {
    selectedTimes.first = idx;
    if (selectedTimes.first === 4) {
      return;
    }
    times.slice(selectedTimes.first + 1).forEach((secondTime, idx2) => {
      selectedTimes.second = selectedTimes.first + 1 + idx2;
      const collisionInfo = getCollisionInfo(
        animalsList[firstTime],
        animalsList[secondTime]
      );
      if (collisionInfo) {
        const collisionBase = {
          id,
          ...collisionInfo,
        };
        collisionsInfo[firstTime].push({
          ...collisionBase,
          animal: animalsList[firstTime],
          targetName: getTargetTime(firstTime),
          secondTarget: {
            animal: animalsList[secondTime],
            targetTime: getTargetTime(secondTime),
          },
        });
        collisionsInfo[secondTime].push({
          ...collisionBase,
          targetName: getTargetTime(secondTime),
          animal: animalsList[secondTime],
          secondTarget: {
            animal: animalsList[firstTime],
            targetTime: getTargetTime(firstTime),
          },
        });
        id += 1;
      }
      if (idx2 === 3) {
        return;
      }
      times.slice(selectedTimes.second + 1).forEach((thirdTime, idx3) => {
        selectedTimes.third = selectedTimes.second + 1 + idx3;
        if (
          selectedTimes.first === selectedTimes.second ||
          selectedTimes.second === selectedTimes.third ||
          selectedTimes.third === selectedTimes.first ||
          selectedTimes.third > 3
        ) {
          return;
        }
        const collisionInfo = getCollisionInfo(
          animalsList[firstTime],
          animalsList[secondTime],
          animalsList[thirdTime]
        );

        if (collisionInfo) {
          const collisionBase = {
            id,
            ...collisionInfo,
          };
          collisionsInfo[firstTime].push({
            ...collisionBase,
            targetName: getTargetTime(firstTime),
            animal: animalsList[firstTime],
            secondTarget: {
              animal: animalsList[secondTime],
              targetTime: getTargetTime(secondTime),
            },
            thirdTarget: {
              animal: animalsList[thirdTime],
              targetTime: getTargetTime(thirdTime),
            },
          });
          collisionsInfo[secondTime].push({
            ...collisionBase,
            targetName: getTargetTime(secondTime),
            animal: animalsList[secondTime],
            secondTarget: {
              animal: animalsList[firstTime],
              targetTime: getTargetTime(firstTime),
            },
            thirdTarget: {
              animal: animalsList[thirdTime],
              targetTime: getTargetTime(thirdTime),
            },
          });
          collisionsInfo[thirdTime].push({
            ...collisionBase,
            targetName: getTargetTime(thirdTime),
            animal: animalsList[thirdTime],
            secondTarget: {
              animal: animalsList[secondTime],
              targetTime: getTargetTime(secondTime),
            },
            thirdTarget: {
              animal: animalsList[firstTime],
              targetTime: getTargetTime(firstTime),
            },
          });
          id += 1;
        }
        console.log(selectedTimes);
      });
      console.log(selectedTimes);
    });
  });
  Object.entries(collisionsInfo).forEach((value) => {
    const [time, collisions] = value;
    console.log(
      time,
      collisions.map((collision) => {
        const { id, animal, secondTarget, thirdTarget } = collision;
        return {
          id,
          animalOne: animal.name,
          animalTwo: secondTarget.animal.name,
          animalThree:
            thirdTarget && thirdTarget.animal ? thirdTarget.animal.name : null,
        };
      })
    );
  });

  return collisionsInfo;
}
