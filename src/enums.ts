import {
  animalType,
  customEnumType,
  directionType,
  elementType,
  mainElementType,
} from "./types";

export const Elements: customEnumType<elementType> = {
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

const firstYears: number[] = [
  1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 1997, 2000, 2001, 2004, 2005,
  2008, 2009, 2012, 2013, 2016, 2017, 2020, 2021, 2024, 2025, 2028, 2029, 2032,
  2033, 2036, 2037, 2040, 2041,
];

export const Animals: customEnumType<animalType> = {
  BULL: {
    name: "бык",
    monthBounds: {
      start: 6,
      end: 35,
    },
    element: Elements.WATER_IN,
  },
  TIGER: {
    name: "тигр",
    monthBounds: {
      start: 36,
      end: 64,
    },
    element: Elements.WATER_YAN,
  },
  RABBIT: {
    name: "кролик",
    monthBounds: {
      start: 65,
      end: 94,
    },
    element: Elements.WOOD_IN,
  },
  DRAGON: {
    name: "дракон",
    monthBounds: {
      start: 95,
      end: 125,
    },
    element: Elements.EARTH_YAN,
  },
  SNAKE: {
    name: "змея",
    monthBounds: {
      start: 126,
      end: 156,
    },
    element: Elements.WOOD_IN,
  },
  HORSE: {
    name: "лошадь",
    monthBounds: {
      start: 157,
      end: 188,
    },
    element: Elements.FIRE_YAN,
  },
  GOAT: {
    name: "коза",
    monthBounds: {
      start: 189,
      end: 219,
    },
    element: Elements.FIRE_IN,
  },
  MONKEY: {
    name: "обезьяна",
    monthBounds: {
      start: 220,
      end: 250,
    },
    element: Elements.EARTH_YAN,
  },
  ROOSTER: {
    name: "петух",
    monthBounds: {
      start: 251,
      end: 281,
    },
    element: Elements.METAL_IN,
  },
  DOG: {
    name: "собака",
    monthBounds: {
      start: 282,
      end: 311,
    },
    element: Elements.METAL_YAN,
  },
  PIG: {
    name: "свинья",
    monthBounds: {
      start: 312,
      end: 340,
    },
    element: Elements.WATER_IN,
  },
  RAT: {
    name: "крыса",
    monthBounds: {
      start: 341,
      end: 5,
    },
    element: Elements.WATER_YAN,
  },
  NULL_ANIMAL: {
    name: " ",
    monthBounds: {
      start: -1,
      end: -1,
    },
    element: Elements.NULL_ELEMENT,
  },
};
export const MainElements: customEnumType<mainElementType> = {
  WATER: {
    elements: [Elements.WATER_IN, Elements.WATER_YAN],
    animals: [Animals.BULL, Animals.TIGER, Animals.PIG, Animals.RAT],
    name: "вода",
  },
  METAL: {
    elements: [Elements.METAL_IN, Elements.METAL_YAN],
    animals: [Animals.ROOSTER, Animals.DOG],
    name: "металл",
  },
  EARTH: {
    elements: [Elements.EARTH_IN, Elements.EARTH_YAN],
    animals: [Animals.DRAGON, Animals.MONKEY],
    name: "земля",
  },
  FIRE: {
    elements: [Elements.FIRE_IN, Elements.FIRE_YAN],
    animals: [Animals.GOAT, Animals.HORSE],
    name: "огонь",
  },
  WOOD: {
    elements: [Elements.WOOD_IN, Elements.WOOD_YAN],
    animals: [Animals.RABBIT, Animals.SNAKE],
    name: "дерево",
  },
  NULL_SIMPLE_ELEMENT: {
    elements: [Elements.NULL_ELEMENT, Elements.NULL_ELEMENT],
    animals: [Animals.NULL_ANIMAL],
    name: " ",
  },
};

export const Directions: customEnumType<directionType> = {
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
