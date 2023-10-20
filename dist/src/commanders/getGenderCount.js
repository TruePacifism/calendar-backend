"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
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
function getGenderCount({ animals, }) {
    const genderCount = {
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
exports.default = getGenderCount;
//# sourceMappingURL=getGenderCount.js.map