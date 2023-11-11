"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directions = exports.MainElements = exports.Animals = exports.Elements = void 0;
exports.Elements = {
    METAL_YAN: {
        name: "Металл Ян",
    },
    METAL_IN: {
        name: "Металл Инь",
    },
    WATER_YAN: {
        name: "Вода Ян",
    },
    WATER_IN: {
        name: "Вода Инь",
    },
    WOOD_YAN: {
        name: "Дерево Ян",
    },
    WOOD_IN: {
        name: "Дерево Инь",
    },
    FIRE_YAN: {
        name: "Огонь Ян",
    },
    FIRE_IN: {
        name: "Огонь Инь",
    },
    EARTH_YAN: {
        name: "Земля Ян",
    },
    EARTH_IN: {
        name: "Земля Инь",
    },
    NULL_ELEMENT: {
        name: " ",
    },
};
const firstYears = [
    1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 1997, 2000, 2001, 2004, 2005,
    2008, 2009, 2012, 2013, 2016, 2017, 2020, 2021, 2024, 2025, 2028, 2029, 2032,
    2033, 2036, 2037, 2040, 2041,
];
exports.Animals = {
    BULL: {
        name: "Бык",
        monthBounds: {
            start: 6,
            end: 35,
        },
        element: exports.Elements.WATER_IN,
    },
    TIGER: {
        name: "Тигр",
        monthBounds: {
            start: 36,
            end: 64,
        },
        element: exports.Elements.WATER_YAN,
    },
    RABBIT: {
        name: "Кролик",
        monthBounds: {
            start: 65,
            end: 94,
        },
        element: exports.Elements.WOOD_IN,
    },
    DRAGON: {
        name: "Дракон",
        monthBounds: {
            start: 95,
            end: 125,
        },
        element: exports.Elements.EARTH_YAN,
    },
    SNAKE: {
        name: "Змея",
        monthBounds: {
            start: 126,
            end: 156,
        },
        element: exports.Elements.WOOD_IN,
    },
    HORSE: {
        name: "Лошадь",
        monthBounds: {
            start: 157,
            end: 188,
        },
        element: exports.Elements.FIRE_YAN,
    },
    GOAT: {
        name: "Коза",
        monthBounds: {
            start: 189,
            end: 219,
        },
        element: exports.Elements.FIRE_IN,
    },
    MONKEY: {
        name: "Обезьяна",
        monthBounds: {
            start: 220,
            end: 250,
        },
        element: exports.Elements.EARTH_YAN,
    },
    ROOSTER: {
        name: "Петух",
        monthBounds: {
            start: 251,
            end: 281,
        },
        element: exports.Elements.METAL_IN,
    },
    DOG: {
        name: "Собака",
        monthBounds: {
            start: 282,
            end: 311,
        },
        element: exports.Elements.METAL_YAN,
    },
    PIG: {
        name: "Свинья",
        monthBounds: {
            start: 312,
            end: 340,
        },
        element: exports.Elements.WATER_IN,
    },
    RAT: {
        name: "Крыса",
        monthBounds: {
            start: 341,
            end: 5,
        },
        element: exports.Elements.WATER_YAN,
    },
    NULL_ANIMAL: {
        name: " ",
        monthBounds: {
            start: -1,
            end: -1,
        },
        element: exports.Elements.NULL_ELEMENT,
    },
};
exports.MainElements = {
    WATER: {
        elements: [exports.Elements.WATER_IN, exports.Elements.WATER_YAN],
        animals: [exports.Animals.BULL, exports.Animals.TIGER, exports.Animals.PIG, exports.Animals.RAT],
        name: "Вода",
    },
    EARTH: {
        elements: [exports.Elements.EARTH_IN, exports.Elements.EARTH_YAN],
        animals: [exports.Animals.DRAGON, exports.Animals.MONKEY],
        name: "Земля",
    },
    METAL: {
        elements: [exports.Elements.METAL_IN, exports.Elements.METAL_YAN],
        animals: [exports.Animals.ROOSTER, exports.Animals.DOG],
        name: "Металл",
    },
    FIRE: {
        elements: [exports.Elements.FIRE_IN, exports.Elements.FIRE_YAN],
        animals: [exports.Animals.GOAT, exports.Animals.HORSE],
        name: "Огонь",
    },
    WOOD: {
        elements: [exports.Elements.WOOD_IN, exports.Elements.WOOD_YAN],
        animals: [exports.Animals.RABBIT, exports.Animals.SNAKE],
        name: "Дерево",
    },
    NULL_SIMPLE_ELEMENT: {
        elements: [exports.Elements.NULL_ELEMENT, exports.Elements.NULL_ELEMENT],
        animals: [exports.Animals.NULL_ANIMAL],
        name: " ",
    },
};
exports.Directions = {
    N: {
        shortName: "С",
        fullName: "Север",
    },
    W: {
        shortName: "З",
        fullName: "Запад",
    },
    S: {
        shortName: "Ю",
        fullName: "Юг",
    },
    E: {
        shortName: "В",
        fullName: "Восток",
    },
    NW: {
        shortName: "СЗ",
        fullName: "Северо-запад",
    },
    NE: {
        shortName: "СВ",
        fullName: "Северо-восток",
    },
    SW: {
        shortName: "ЮЗ",
        fullName: "Юго-запад",
    },
    SE: {
        shortName: "ЮВ",
        fullName: "Юго-восток",
    },
    CN: {
        shortName: "СЦ",
        fullName: "Северо-центр",
    },
    CS: {
        shortName: "ЮЦ",
        fullName: "Юго-центр",
    },
    CW: {
        shortName: "ЦЗ",
        fullName: "Центро-запад",
    },
    CE: {
        shortName: "ЦВ",
        fullName: "Центро-восток",
    },
    C: {
        shortName: "Ц",
        fullName: "Центр",
    },
    NULL_DIRECTION: {
        shortName: "-",
        fullName: "Не подсчитано",
    },
};
//# sourceMappingURL=enums.js.map