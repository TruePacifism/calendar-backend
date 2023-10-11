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
};
