"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
function getChartData({ momId, dadId, animals, elements, }) {
    const chartData = {
        BULL: 0,
        TIGER: 0,
        RABBIT: 0,
        MONKEY: 0,
        DRAGON: 0,
        RAT: 0,
        DOG: 0,
        ROOSTER: 0,
        PIG: 0,
        HORSE: 0,
        SNAKE: 0,
        GOAT: 0,
    };
    Object.entries(chartData).forEach(([key, value]) => {
        if (enums_1.Animals[key] === animals.year) {
            chartData[key] +=
                animals.month === enums_1.Animals.BULL || animals.month === enums_1.Animals.TIGER
                    ? 15
                    : 25;
        }
        if (enums_1.Animals[key] === animals.month) {
            chartData[key] +=
                animals.month === enums_1.Animals.BULL || animals.month === enums_1.Animals.TIGER
                    ? 25
                    : 15;
        }
        if (enums_1.Animals[key] === animals.day) {
            chartData[key] += 7.5;
        }
        if (enums_1.Animals[key] === animals.hour) {
            chartData[key] += 2.5;
        }
    });
    const sum = Object.values(chartData).reduce((prev, current) => prev + current, 0);
    Object.keys(chartData).forEach((key) => (chartData[key] *= 2));
    return chartData;
}
exports.default = getChartData;
//# sourceMappingURL=getChartData.js.map