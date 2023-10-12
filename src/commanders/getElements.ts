import { Elements } from "../enums";
import { dateType, elementType } from "../types";

type propsType = {
  birthdate: dateType;
};

const getYear = (year: number): elementType => {
  const index = year % 10;
  return Elements[index];
};

export default function getElements({ birthdate }: propsType) {
  const { year, month, day, hour, minute } = birthdate;
  const yearElement = getYear(year);
}
