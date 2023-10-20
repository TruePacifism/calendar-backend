"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAge({ birthdate }) {
    const now = new Date();
    let year = now.getFullYear() - birthdate.year;
    let month = now.getMonth() - birthdate.month;
    if (month < 0) {
        year -= 1;
        month += 12;
    }
    return { year, month };
}
exports.default = getAge;
//# sourceMappingURL=getAge.js.map