"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const starsInfo = [
    {
        element: enums_1.MainElements.WATER,
        side: enums_1.Directions.N,
        goods: ["мудрость", "коммуникабельность", "общительность"],
        bads: ["бесплодие", "импотенция", "слепота"],
    },
    {
        element: enums_1.MainElements.EARTH,
        side: enums_1.Directions.SW,
        goods: ["богатство", "рост", "плодородие"],
        bads: ["болезни", "проблемы пищеварения", "жадность"],
    },
    {
        element: enums_1.MainElements.WOOD,
        side: enums_1.Directions.E,
        goods: ["прогресс", "развитие", "лидерство", "деньги"],
        bads: ["ссоры", "ограбления", "дисгармония"],
    },
    {
        element: enums_1.MainElements.WOOD,
        side: enums_1.Directions.SE,
        goods: ["успехи в учебе", "культура", "поэтический талант", "романтика"],
        bads: ["измены", "обманы", "сексуальные скандалы"],
    },
    {
        element: enums_1.MainElements.EARTH,
        side: enums_1.Directions.C,
        goods: ["власть", "авторитет", "тоталитарность"],
        bads: ["разрушение", "неудачи", "катастрофы", "эпидемии"],
    },
    {
        element: enums_1.MainElements.METAL,
        side: enums_1.Directions.NW,
        goods: ["удача в бизнесе", "на гос.службе", "в науке"],
        bads: ["потеря славы", "влияния", "бесплодие", "одиночество"],
    },
    {
        element: enums_1.MainElements.METAL,
        side: enums_1.Directions.W,
        goods: [
            "талант оратора",
            "способности к языкам",
            "эзотерике",
            "астрологии",
            "красота",
            "богатство",
        ],
        bads: [
            "ранения",
            "разрушения",
            "потери",
            "пожары",
            "проституция",
            "судебные тяжбы",
            "травмы",
        ],
    },
    {
        element: enums_1.MainElements.EARTH,
        side: enums_1.Directions.NE,
        goods: ["финансовая удача", "духовность", "лидерство", "быстрый успех"],
        bads: ["болезни"],
    },
    {
        element: enums_1.MainElements.FIRE,
        side: enums_1.Directions.S,
        goods: ["слава", "известность", "риск", "благотворительность"],
        bads: ["подлость", "пожары"],
    },
];
const exampleStars = [
    {
        year: 0,
        month: 7,
    },
    {
        year: 5,
        month: 3,
    },
    {
        year: 7,
        month: 5,
    },
    {
        year: 8,
        month: 6,
    },
    {
        year: 1,
        month: 8,
    },
    {
        year: 3,
        month: 1,
    },
    {
        year: 4,
        month: 2,
    },
    {
        year: 6,
        month: 4,
    },
    {
        year: 2,
        month: 0,
    },
];
function getFallingStars({ birthdate, animals, }) {
    const { year, month, day } = birthdate;
    const dayOfYear = Math.floor((new Date(year, month === -1 ? 0 : month, day === -1 ? 1 : day).getTime() -
        new Date(year, 0, 1).getTime()) /
        1000 /
        3600 /
        24);
    const fallingStars = [];
    let yearOffset = (year + 0) % 9;
    let monthOffset = (month + ((year - 100) % 3) * 3) % 9;
    if ((0, enums_1.isDateInRange)({ day, month }, { day: 0, month: 0 }, enums_1.Animals.TIGER.monthBounds.firstType.start)) {
        yearOffset += 8;
        yearOffset %= 9;
    }
    if (Object.values(enums_1.Animals)[month] !== animals.month) {
        monthOffset += 8;
        monthOffset %= 9;
    }
    exampleStars.forEach((exampleStar) => {
        const yearNumber = exampleStar.year - yearOffset + 1;
        const monthNumber = month === -1 ? -10 : exampleStar.month - monthOffset + 1;
        fallingStars.push(Object.assign({ yearNumber: yearNumber > 0 ? yearNumber : yearNumber + 9, monthNumber: monthNumber > 0 ? monthNumber : monthNumber + 9 }, starsInfo[yearNumber > 0 ? yearNumber - 1 : yearNumber + 9 - 1]));
    });
    return fallingStars;
}
exports.default = getFallingStars;
//# sourceMappingURL=getFallingStars.js.map