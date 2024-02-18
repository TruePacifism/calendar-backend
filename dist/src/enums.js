"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directions = exports.MainElements = exports.Animals = exports.countIsFirstYearBounds = exports.isDateInRange = exports.Elements = void 0;
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
const secondYears = [
    1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 1997, 2000, 2001, 2004, 2005,
    2008, 2009, 2012, 2013, 2016, 2017, 2020, 2021, 2024, 2025, 2028, 2029, 2032,
    2033, 2036, 2037, 2040, 2041,
];
function isDateInRange(date, startDate, endDate) {
    const { day, month } = date;
    const { day: startDay, month: startMonth } = startDate;
    const { day: endDay, month: endMonth } = endDate;
    if ((month > startMonth || (month === startMonth && day >= startDay)) && // Проверяем, больше ли текущий месяц, чем начальный, или равен и больше ли текущий день начальному дню
        (month < endMonth || (month === endMonth && day <= endDay)) // Проверяем, меньше ли текущий месяц, чем конечный, или равен и меньше ли текущий день конечному дню
    ) {
        return true; // Если обе проверки проходят, то дата находится в промежутке
    }
    else {
        return false; // В противном случае дата находится вне промежутка
    }
}
exports.isDateInRange = isDateInRange;
const countIsFirstYearBounds = (year) => !secondYears.includes(year);
exports.countIsFirstYearBounds = countIsFirstYearBounds;
exports.Animals = {
    BULL: {
        name: "бык",
        monthBounds: {
            firstType: {
                start: {
                    month: 0,
                    day: 6,
                },
                end: {
                    month: 1,
                    day: 4,
                },
            },
            secondType: {
                start: {
                    month: 0,
                    day: 6,
                },
                end: {
                    month: 1,
                    day: 4,
                },
            },
        },
        element: exports.Elements.WATER_IN,
    },
    TIGER: {
        name: "тигр",
        monthBounds: {
            firstType: {
                start: {
                    month: 1,
                    day: 5,
                },
                end: {
                    month: 2,
                    day: 5,
                },
            },
            secondType: {
                start: {
                    month: 1,
                    day: 5,
                },
                end: {
                    month: 2,
                    day: 5,
                },
            },
        },
        element: exports.Elements.WATER_YAN,
    },
    RABBIT: {
        name: "кролик",
        monthBounds: {
            firstType: {
                start: {
                    month: 2,
                    day: 6,
                },
                end: {
                    month: 3,
                    day: 4,
                },
            },
            secondType: {
                start: {
                    month: 2,
                    day: 6,
                },
                end: {
                    month: 3,
                    day: 4,
                },
            },
        },
        element: exports.Elements.WOOD_IN,
    },
    DRAGON: {
        name: "дракон",
        monthBounds: {
            firstType: {
                start: {
                    month: 3,
                    day: 5,
                },
                end: {
                    month: 4,
                    day: 5,
                },
            },
            secondType: {
                start: {
                    month: 3,
                    day: 5,
                },
                end: {
                    month: 4,
                    day: 4,
                },
            },
        },
        element: exports.Elements.EARTH_YAN,
    },
    SNAKE: {
        name: "змея",
        monthBounds: {
            firstType: {
                start: {
                    month: 4,
                    day: 5,
                },
                end: {
                    month: 5,
                    day: 5,
                },
            },
            secondType: {
                start: {
                    month: 4,
                    day: 5,
                },
                end: {
                    month: 5,
                    day: 5,
                },
            },
        },
        element: exports.Elements.WOOD_IN,
    },
    HORSE: {
        name: "лошадь",
        monthBounds: {
            firstType: {
                start: {
                    month: 5,
                    day: 6,
                },
                end: {
                    month: 6,
                    day: 7,
                },
            },
            secondType: {
                start: {
                    month: 5,
                    day: 6,
                },
                end: {
                    month: 6,
                    day: 6,
                },
            },
        },
        element: exports.Elements.FIRE_YAN,
    },
    GOAT: {
        name: "коза",
        monthBounds: {
            firstType: {
                start: {
                    month: 6,
                    day: 8,
                },
                end: {
                    month: 7,
                    day: 7,
                },
            },
            secondType: {
                start: {
                    month: 6,
                    day: 7,
                },
                end: {
                    month: 7,
                    day: 6,
                },
            },
        },
        element: exports.Elements.FIRE_IN,
    },
    MONKEY: {
        name: "обезьяна",
        monthBounds: {
            firstType: {
                start: {
                    month: 7,
                    day: 8,
                },
                end: {
                    month: 8,
                    day: 7,
                },
            },
            secondType: {
                start: {
                    month: 7,
                    day: 7,
                },
                end: {
                    month: 8,
                    day: 7,
                },
            },
        },
        element: exports.Elements.EARTH_YAN,
    },
    ROOSTER: {
        name: "петух",
        monthBounds: {
            firstType: {
                start: {
                    month: 8,
                    day: 8,
                },
                end: {
                    month: 9,
                    day: 8,
                },
            },
            secondType: {
                start: {
                    month: 8,
                    day: 8,
                },
                end: {
                    month: 9,
                    day: 7,
                },
            },
        },
        element: exports.Elements.METAL_IN,
    },
    DOG: {
        name: "собака",
        monthBounds: {
            firstType: {
                start: {
                    month: 9,
                    day: 9,
                },
                end: {
                    month: 10,
                    day: 7,
                },
            },
            secondType: {
                start: {
                    month: 9,
                    day: 8,
                },
                end: {
                    month: 10,
                    day: 7,
                },
            },
        },
        element: exports.Elements.METAL_YAN,
    },
    PIG: {
        name: "свинья",
        monthBounds: {
            firstType: {
                start: {
                    month: 10,
                    day: 8,
                },
                end: {
                    month: 11,
                    day: 6,
                },
            },
            secondType: {
                start: {
                    month: 10,
                    day: 8,
                },
                end: {
                    month: 11,
                    day: 6,
                },
            },
        },
        element: exports.Elements.WATER_IN,
    },
    RAT: {
        name: "крыса",
        monthBounds: {
            firstType: {
                start: {
                    month: 11,
                    day: 7,
                },
                end: {
                    month: 0,
                    day: 5,
                },
            },
            secondType: {
                start: {
                    month: 11,
                    day: 7,
                },
                end: {
                    month: 0,
                    day: 5,
                },
            },
        },
        element: exports.Elements.WATER_YAN,
    },
    NULL_ANIMAL: {
        name: " ",
        monthBounds: {
            firstType: {
                start: {
                    month: -1,
                    day: -1,
                },
                end: {
                    month: -1,
                    day: -1,
                },
            },
            secondType: {
                start: {
                    month: -1,
                    day: -1,
                },
                end: {
                    month: -1,
                    day: -1,
                },
            },
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
        shortName: "Ц",
        fullName: "Центр",
    },
    NULL_DIRECTION: {
        shortName: "-",
        fullName: "Не подсчитано",
    },
};
//# sourceMappingURL=enums.js.map