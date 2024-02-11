"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getChineseDate(trueBirthdate, animals) {
    const chineseBirthdate = Object.assign({}, trueBirthdate);
    console.log(chineseBirthdate);
    if (animals.month &&
        enums_1.Animals[trueBirthdate.month] &&
        animals.month.name !== enums_1.Animals[trueBirthdate.month].name) {
        console.log(animals.month);
        console.log(trueBirthdate.month);
        chineseBirthdate.month -= 1;
    }
    if (animals.month === enums_1.Animals.BULL) {
        chineseBirthdate.year -= 1;
    }
    console.log(chineseBirthdate);
    return chineseBirthdate;
}
exports.default = getChineseDate;
//# sourceMappingURL=getChineseDate.js.map