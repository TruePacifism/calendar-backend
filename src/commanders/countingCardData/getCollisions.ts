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
    animals: ["Змея", "Обезьяна", "Тигр"],
    shape: "rhombus",
    color: "red",
    kind: "Наказание неблагодарности",
  },
  {
    animals: ["Собака", "Коза", "Бык"],
    shape: "rhombus",
    color: "brown",
    kind: "Уничижающее наказание",
  },
  {
    animals: ["Собака", "Тигр", "Лошадь"],
    shape: "circle",
    color: "red",
    kind: "Гармония трёх",
  },
  {
    animals: ["Кролик", "Коза", "Свинья"],
    shape: "circle",
    color: "darkGreen",
    kind: "Гармония трёх",
  },
  {
    animals: ["Змея", "Бык", "Петух"],
    shape: "circle",
    color: "purple",
    kind: "Гармония трёх",
  },
  {
    animals: ["Обезьяна", "Дракон", "Крыса"],
    shape: "circle",
    color: "blue",
    kind: "Гармония трёх",
  },
  {
    animals: ["Лошадь", "Крыса"],
    shape: "half",
    color: "red",
    kind: "Столкновение",
  },
  {
    animals: ["Коза", "Бык"],
    shape: "half",
    color: "orange",
    kind: "Столкновение",
  },
  {
    animals: ["Тигр", "Обезьяна"],
    shape: "half",
    color: "brown",
    kind: "Столкновение",
  },
  {
    animals: ["Кролик", "Петух"],
    shape: "half",
    color: "pink",
    kind: "Столкновение",
  },
  {
    animals: ["Змея", "Свинья"],
    shape: "half",
    color: "lightGreen",
    kind: "Столкновение",
  },
  {
    animals: ["Дракон", "Собака"],
    shape: "half",
    color: "purple",
    kind: "Столкновение",
  },
  {
    animals: ["Дракон", "Дракон"],
    shape: "rectangle",
    color: "brown",
    kind: "Самонаказание",
  },
  {
    animals: ["Петух", "Петух"],
    shape: "rectangle",
    color: "pink",
    kind: "Самонаказание",
  },
  {
    animals: ["Лошадь", "Лошадь"],
    shape: "rectangle",
    color: "red",
    kind: "Самонаказание",
  },
  {
    animals: ["Свинья", "Свинья"],
    shape: "rectangle",
    color: "lightBlue",
    kind: "Самонаказание",
  },
  {
    animals: ["Кролик", "Крыса"],
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
  const animalNames: string[] = thirdAnimal
    ? [firstAnimal, secondAnimal, thirdAnimal]
        .map((animal) => animal.name)
        .sort()
    : [firstAnimal, secondAnimal].map((animal) => animal.name).sort();
  const collisionInfo = collisionsInfo.find(
    (collisionInfo) => collisionInfo.animals === animalNames
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
  const animalsList = {
    ...animals,
    currentPillar: currentPillar.animal,
  };
  const collisionsInfo = {
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
        const collision: collisionType = {
          id,
          ...collisionInfo,
          secondTarget: {
            animal: animalsList[secondTime],
            targetTime: getTargetTime(secondTime),
          },
        };
        collisionsInfo[firstTime].push(collision);
        collisionsInfo[secondTime].push(collision);
        id += 1;
      }
      times.slice(idx2 === 4 ? 4 : idx2 + 1).forEach((thirdTime) => {
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
          const collision: collisionType = {
            id,
            ...collisionInfo,
            secondTarget: {
              animal: animalsList[secondTime],
              targetTime: getTargetTime(secondTime),
            },
            thirdTarget: {
              animal: animalsList[thirdTime],
              targetTime: getTargetTime(thirdTime),
            },
          };
          collisionsInfo[firstTime].push(collision);
          collisionsInfo[secondTime].push(collision);
          collisionsInfo[thirdTime].push(collision);
          id += 1;
        }
      });
    });
  });
  return collisionsInfo;
}
