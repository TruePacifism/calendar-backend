import {
  animalType,
  animalsCounted,
  collisionColorType,
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
  kind: collisionKindType;
}[] = [
  {
    animals: ["Змея", "Обезьяна", "Тигр"].sort(),
    shape: "rhombus",
    color: "red",
    kind: "Наказание неблагодарности",
  },
  {
    animals: ["Собака", "Коза", "Бык"].sort(),
    shape: "rhombus",
    color: "brown",
    kind: "Уничижающее наказание",
  },
  {
    animals: ["Собака", "Тигр", "Лошадь"].sort(),
    shape: "circle",
    color: "red",
    kind: "Гармония трёх",
  },
  {
    animals: ["Кролик", "Коза", "Свинья"].sort(),
    shape: "circle",
    color: "darkGreen",
    kind: "Гармония трёх",
  },
  {
    animals: ["Змея", "Бык", "Петух"].sort(),
    shape: "circle",
    color: "purple",
    kind: "Гармония трёх",
  },
  {
    animals: ["Обезьяна", "Дракон", "Крыса"].sort(),
    shape: "circle",
    color: "blue",
    kind: "Гармония трёх",
  },
  {
    animals: ["Лошадь", "Крыса"].sort(),
    shape: "half",
    color: "red",
    kind: "Столкновение",
  },
  {
    animals: ["Коза", "Бык"].sort(),
    shape: "half",
    color: "orange",
    kind: "Столкновение",
  },
  {
    animals: ["Тигр", "Обезьяна"].sort(),
    shape: "half",
    color: "brown",
    kind: "Столкновение",
  },
  {
    animals: ["Кролик", "Петух"].sort(),
    shape: "half",
    color: "pink",
    kind: "Столкновение",
  },
  {
    animals: ["Змея", "Свинья"].sort(),
    shape: "half",
    color: "lightGreen",
    kind: "Столкновение",
  },
  {
    animals: ["Дракон", "Собака"].sort(),
    shape: "half",
    color: "purple",
    kind: "Столкновение",
  },
  {
    animals: ["Дракон", "Дракон"].sort(),
    shape: "rectangle",
    color: "brown",
    kind: "Самонаказание",
  },
  {
    animals: ["Петух", "Петух"].sort(),
    shape: "rectangle",
    color: "pink",
    kind: "Самонаказание",
  },
  {
    animals: ["Лошадь", "Лошадь"].sort(),
    shape: "rectangle",
    color: "red",
    kind: "Самонаказание",
  },
  {
    animals: ["Свинья", "Свинья"].sort(),
    shape: "rectangle",
    color: "lightBlue",
    kind: "Самонаказание",
  },
  {
    animals: ["Кролик", "Крыса"].sort(),
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
  if (!firstAnimal || !secondAnimal || !thirdAnimal) {
    return;
  }
  const animalNames: string[] = thirdAnimal
    ? [firstAnimal, secondAnimal, thirdAnimal]
        .map((animal) => animal.name)
        .sort()
    : [firstAnimal, secondAnimal].map((animal) => animal.name).sort();

  const collisionInfo = collisionsInfo.find((collisionInfo) =>
    collisionInfo.animals.every(
      (animalName, idx) => animalNames[idx] === animalName
    )
  );
  if (collisionInfo) {
    const { color, kind, shape } = collisionInfo;
    return { color, kind, shape };
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
  let id = 1;
  times.forEach((firstTime, idx) => {
    times.slice(idx === 4 ? 4 : idx + 1).forEach((secondTime, idx2) => {
      if (firstTime === secondTime) {
        return;
      }
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
          targetName: getTargetTime(firstTime),
          secondTarget: {
            animal: animalsList[secondTime],
            targetTime: getTargetTime(secondTime),
          },
        });
        collisionsInfo[secondTime].push({
          ...collisionBase,
          targetName: getTargetTime(secondTime),
          secondTarget: {
            animal: animalsList[firstTime],
            targetTime: getTargetTime(firstTime),
          },
        });
        id += 1;
      }
      times
        .slice(idx === 0 ? 1 : 0 + idx2 === 4 ? 4 : idx + idx2 + 1)
        .forEach((thirdTime, idx3) => {
          if (
            firstTime === secondTime ||
            secondTime === thirdTime ||
            firstTime === thirdTime
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
        });
    });
  });
  return collisionsInfo;
}
