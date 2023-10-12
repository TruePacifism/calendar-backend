import { animalType, customEnumType, elementType } from "./types";

export const Elements: customEnumType<elementType> = {
  FIRE_IN: {
    name: "Огонь Инь",
  },
  FIRE_YAN: {
    name: "Огонь Ян",
  },
  WATER_IN: {
    name: "Вода Инь",
  },
  WATER_YAN: {
    name: "Вода Ян",
  },
  EARTH_IN: {
    name: "Земля Инь",
  },
  EARTH_YAN: {
    name: "Земля Ян",
  },
  METAL_IN: {
    name: "Металл Инь",
  },
  METAL_YAN: {
    name: "Металл Ян",
  },
  WOOD_IN: {
    name: "Дерево Инь",
  },
  WOOD_YAN: {
    name: "Дерево Ян",
  },
};

export const Animals: customEnumType<animalType> = {
  BULL: {
    name: "Бык",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  TIGER: {
    name: "Тигр",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  RABBIT: {
    name: "Кролик",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  DRAGON: {
    name: "Дракон",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  SNAKE: {
    name: "Змея",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  HORSE: {
    name: "Лошадь",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  GOAT: {
    name: "Коза",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  MONKEY: {
    name: "Обезьяна",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  ROOSTER: {
    name: "Петух",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  DOG: {
    name: "Собака",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  PIG: {
    name: "Свинья",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
  RAT: {
    name: "Крыса",
    monthBounds: {
      start: 32,
      end: 54,
    },
    element: Elements.FIRE_IN,
  },
};
