"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directions = exports.MainElements = exports.Animals = exports.Elements = void 0;
exports.Elements = {
    METAL_YAN: {
        name: "металл ян",
    },
    METAL_IN: {
        name: "металл инь",
    },
    WATER_YAN: {
        name: "вода ян",
    },
    WATER_IN: {
        name: "вода инь",
    },
    WOOD_YAN: {
        name: "дерево ян",
    },
    WOOD_IN: {
        name: "дерево инь",
    },
    FIRE_YAN: {
        name: "огонь ян",
    },
    FIRE_IN: {
        name: "огонь инь",
    },
    EARTH_YAN: {
        name: "земля ян",
    },
    EARTH_IN: {
        name: "земля инь",
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
        name: "бык",
        monthBounds: {
            start: 6,
            end: 35,
        },
        element: exports.Elements.WATER_IN,
    },
    TIGER: {
        name: "тигр",
        monthBounds: {
            start: 36,
            end: 64,
        },
        element: exports.Elements.WATER_YAN,
    },
    RABBIT: {
        name: "кролик",
        monthBounds: {
            start: 65,
            end: 94,
        },
        element: exports.Elements.WOOD_IN,
    },
    DRAGON: {
        name: "дракон",
        monthBounds: {
            start: 95,
            end: 125,
        },
        element: exports.Elements.EARTH_YAN,
    },
    SNAKE: {
        name: "змея",
        monthBounds: {
            start: 126,
            end: 156,
        },
        element: exports.Elements.WOOD_IN,
    },
    HORSE: {
        name: "лошадь",
        monthBounds: {
            start: 157,
            end: 188,
        },
        element: exports.Elements.FIRE_YAN,
    },
    GOAT: {
        name: "коза",
        monthBounds: {
            start: 189,
            end: 219,
        },
        element: exports.Elements.FIRE_IN,
    },
    MONKEY: {
        name: "обезьяна",
        monthBounds: {
            start: 220,
            end: 250,
        },
        element: exports.Elements.EARTH_YAN,
    },
    ROOSTER: {
        name: "петух",
        monthBounds: {
            start: 251,
            end: 281,
        },
        element: exports.Elements.METAL_IN,
    },
    DOG: {
        name: "собака",
        monthBounds: {
            start: 282,
            end: 311,
        },
        element: exports.Elements.METAL_YAN,
    },
    PIG: {
        name: "свинья",
        monthBounds: {
            start: 312,
            end: 340,
        },
        element: exports.Elements.WATER_IN,
    },
    RAT: {
        name: "крыса",
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
        name: "вода",
    },
    METAL: {
        elements: [exports.Elements.METAL_IN, exports.Elements.METAL_YAN],
        animals: [exports.Animals.ROOSTER, exports.Animals.DOG],
        name: "металл",
    },
    EARTH: {
        elements: [exports.Elements.EARTH_IN, exports.Elements.EARTH_YAN],
        animals: [exports.Animals.DRAGON, exports.Animals.MONKEY],
        name: "земля",
    },
    FIRE: {
        elements: [exports.Elements.FIRE_IN, exports.Elements.FIRE_YAN],
        animals: [exports.Animals.GOAT, exports.Animals.HORSE],
        name: "огонь",
    },
    WOOD: {
        elements: [exports.Elements.WOOD_IN, exports.Elements.WOOD_YAN],
        animals: [exports.Animals.RABBIT, exports.Animals.SNAKE],
        name: "дерево",
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
        fullName: "Северо-Запад",
    },
    NE: {
        shortName: "СВ",
        fullName: "Северо-Восток",
    },
    SW: {
        shortName: "ЮЗ",
        fullName: "Юго-Запад",
    },
    SE: {
        shortName: "ЮВ",
        fullName: "Юго-Восток",
    },
    CN: {
        shortName: "СЗ",
        fullName: "Северо-Запад",
    },
    CS: {
        shortName: "ЮЗ",
        fullName: "Юго-Запад",
    },
    CW: {
        shortName: "З",
        fullName: "Запад",
    },
    CE: {
        shortName: "ЗВ",
        fullName: "Западо-Восток",
    },
    C: {
        shortName: "З",
        fullName: "Запад",
    },
    NULL_DIRECTION: {
        shortName: "-",
        fullName: "Не подсчитано",
    },
};
//# sourceMappingURL=enums.js.map