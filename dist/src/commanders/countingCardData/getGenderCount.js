"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const getGenderByAnimal = (animal) => {
    switch (animal) {
        case enums_1.Animals.RAT:
        case enums_1.Animals.TIGER:
        case enums_1.Animals.DRAGON:
        case enums_1.Animals.HORSE:
        case enums_1.Animals.MONKEY:
        case enums_1.Animals.DOG:
            return "male";
        case enums_1.Animals.BULL:
        case enums_1.Animals.SNAKE:
        case enums_1.Animals.RABBIT:
        case enums_1.Animals.PIG:
        case enums_1.Animals.GOAT:
        case enums_1.Animals.ROOSTER:
            return "female";
    }
};
function getGenderCount({ animals, currentPillar, }) {
    const genderCount = {
        female: 0,
        male: 0,
    };
    const yearGender = getGenderByAnimal(animals.year);
    genderCount[yearGender] +=
        animals.month === enums_1.Animals.BULL || animals.month === enums_1.Animals.TIGER ? 15 : 25;
    const monthGender = getGenderByAnimal(animals.month);
    genderCount[monthGender] +=
        animals.month === enums_1.Animals.BULL || animals.month === enums_1.Animals.TIGER ? 25 : 15;
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
exports.default = getGenderCount;
//# sourceMappingURL=getGenderCount.js.map