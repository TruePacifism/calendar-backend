"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collisionsInfo = [
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
const getTargetTime = (time) => {
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
const getCollisionInfo = (firstAnimal, secondAnimal, thirdAnimal) => {
    if (!firstAnimal || !secondAnimal) {
        return;
    }
    const animalNames = thirdAnimal
        ? [firstAnimal, secondAnimal, thirdAnimal]
            .map((animal) => animal.name)
            .sort()
        : [firstAnimal, secondAnimal].map((animal) => animal.name).sort();
    const foundCollisionInfo = collisionsInfo.find((collisionInfo) => collisionInfo.animals.length === animalNames.length &&
        collisionInfo.animals.every((animalName, idx) => animalNames[idx] === animalName));
    if (foundCollisionInfo) {
        const { color, kind, shape } = foundCollisionInfo;
        return { color, kind, shape };
    }
};
function getCollisions({ animals, currentPillar, pillars, }) {
    const animalsList = currentPillar
        ? Object.assign(Object.assign({}, animals), { currentPillar: currentPillar.animal }) : animals;
    const collisionsInfo = {
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
            const collisionInfo = getCollisionInfo(animalsList[firstTime], animalsList[secondTime]);
            if (collisionInfo) {
                const collisionBase = Object.assign({ id }, collisionInfo);
                collisionsInfo[firstTime].push(Object.assign(Object.assign({}, collisionBase), { animal: animalsList[firstTime], targetName: getTargetTime(firstTime), secondTarget: {
                        animal: animalsList[secondTime],
                        targetTime: getTargetTime(secondTime),
                    } }));
                collisionsInfo[secondTime].push(Object.assign(Object.assign({}, collisionBase), { targetName: getTargetTime(secondTime), animal: animalsList[secondTime], secondTarget: {
                        animal: animalsList[firstTime],
                        targetTime: getTargetTime(firstTime),
                    } }));
                id += 1;
            }
            if (idx2 === 3) {
                return;
            }
            times.slice(selectedTimes.second + 1).forEach((thirdTime, idx3) => {
                selectedTimes.third = selectedTimes.second + 1 + idx3;
                if (selectedTimes.first === selectedTimes.second ||
                    selectedTimes.second === selectedTimes.third ||
                    selectedTimes.third === selectedTimes.first ||
                    selectedTimes.third > 3) {
                    return;
                }
                const collisionInfo = getCollisionInfo(animalsList[firstTime], animalsList[secondTime], animalsList[thirdTime]);
                if (collisionInfo) {
                    const collisionBase = Object.assign({ id }, collisionInfo);
                    collisionsInfo[firstTime].push(Object.assign(Object.assign({}, collisionBase), { targetName: getTargetTime(firstTime), animal: animalsList[firstTime], secondTarget: {
                            animal: animalsList[secondTime],
                            targetTime: getTargetTime(secondTime),
                        }, thirdTarget: {
                            animal: animalsList[thirdTime],
                            targetTime: getTargetTime(thirdTime),
                        } }));
                    collisionsInfo[secondTime].push(Object.assign(Object.assign({}, collisionBase), { targetName: getTargetTime(secondTime), animal: animalsList[secondTime], secondTarget: {
                            animal: animalsList[firstTime],
                            targetTime: getTargetTime(firstTime),
                        }, thirdTarget: {
                            animal: animalsList[thirdTime],
                            targetTime: getTargetTime(thirdTime),
                        } }));
                    collisionsInfo[thirdTime].push(Object.assign(Object.assign({}, collisionBase), { targetName: getTargetTime(thirdTime), animal: animalsList[thirdTime], secondTarget: {
                            animal: animalsList[secondTime],
                            targetTime: getTargetTime(secondTime),
                        }, thirdTarget: {
                            animal: animalsList[firstTime],
                            targetTime: getTargetTime(firstTime),
                        } }));
                    id += 1;
                }
                console.log(selectedTimes);
            });
            console.log(selectedTimes);
        });
    });
    Object.entries(collisionsInfo).forEach((value) => {
        const [time, collisions] = value;
        console.log(time, collisions.map((collision) => {
            const { id, animal, secondTarget, thirdTarget } = collision;
            return {
                id,
                animalOne: animal.name,
                animalTwo: secondTarget.animal.name,
                animalThree: thirdTarget && thirdTarget.animal ? thirdTarget.animal.name : null,
            };
        }));
    });
    return collisionsInfo;
}
exports.default = getCollisions;
//# sourceMappingURL=getCollisions.js.map