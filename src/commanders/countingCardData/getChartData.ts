import { Animals } from "../../enums";
import {
  animalsCounted,
  elementsCounted,
  parentChartInfoType,
} from "../../types";

type propsType = {
  momId?: string;
  dadId?: string;
  animals: animalsCounted;
  elements: elementsCounted;
};

export default function getChartData({
  momId,
  dadId,
  animals,
  elements,
}: propsType) {
  const chartData: parentChartInfoType = {
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
    if (Animals[key] === animals.year) {
      chartData[key] +=
        animals.month === Animals.BULL || animals.month === Animals.TIGER
          ? 15
          : 25;
    }
    if (Animals[key] === animals.month) {
      chartData[key] +=
        animals.month === Animals.BULL || animals.month === Animals.TIGER
          ? 25
          : 15;
    }
    if (Animals[key] === animals.day) {
      chartData[key] += 7.5;
    }
    if (Animals[key] === animals.hour) {
      chartData[key] += 2.5;
    }
  });
  const sum = Object.values(chartData).reduce(
    (prev, current) => prev + current,
    0
  );
  Object.keys(chartData).forEach((key) => (chartData[key] *= 2));
  return chartData;
}
