"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getDirection({ birthdate }) {
    const { year, month } = birthdate;
    if (month === -1) {
        switch (year) {
            case 0:
            case 1:
                return enums_1.Directions.W;
            case 2:
            case 3:
                return enums_1.Directions.N;
            case 4:
            case 5:
                return enums_1.Directions.E;
            case 6:
            case 7:
                return enums_1.Directions.S;
            case 8:
            case 9:
                return enums_1.Directions.C;
            default:
                return enums_1.Directions.NULL_DIRECTION;
        }
    }
    if (month === 0) {
        return {
            shortName: "С",
            fullName: "Север",
        };
    }
    switch (year % 10) {
        case 0:
        case 1:
            switch (month) {
                case 1:
                case 10:
                case 11:
                    return enums_1.Directions.NW;
                case 2:
                case 3:
                case 8:
                case 9:
                    return enums_1.Directions.W;
                case 4:
                case 5:
                case 6:
                case 7:
                    return enums_1.Directions.SW;
            }
        case 2:
        case 3:
            switch (month) {
                case 1:
                case 3:
                case 6:
                case 11:
                    return enums_1.Directions.N;
                case 7:
                case 8:
                case 9:
                case 10:
                    return enums_1.Directions.NW;
                case 2:
                case 4:
                case 5:
                case 7:
                    return enums_1.Directions.NE;
            }
        case 4:
        case 5:
            switch (month) {
                case 1:
                case 11:
                    return enums_1.Directions.NE;
                case 2:
                case 3:
                case 4:
                case 8:
                case 9:
                case 10:
                    return enums_1.Directions.E;
                case 5:
                case 6:
                case 7:
                    return enums_1.Directions.SE;
            }
        case 6:
        case 7:
            switch (month) {
                case 1:
                case 8:
                case 9:
                case 10:
                case 11:
                    return enums_1.Directions.SW;
                case 5:
                case 6:
                case 7:
                    return enums_1.Directions.S;
                case 2:
                case 3:
                case 4:
                    return enums_1.Directions.SE;
            }
        case 8:
        case 9:
            switch (month) {
                case 1:
                case 11:
                    return enums_1.Directions.CN;
                case 2:
                case 3:
                case 4:
                    return enums_1.Directions.CE;
                case 5:
                case 6:
                case 7:
                    return enums_1.Directions.CS;
                case 8:
                case 9:
                case 10:
                    return enums_1.Directions.CW;
            }
    }
}
exports.default = getDirection;
//# sourceMappingURL=getDirection.js.map