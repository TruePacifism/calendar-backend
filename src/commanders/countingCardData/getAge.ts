import { dateType } from "../../types";

type propsType = {
  birthdate: dateType;
};

export default function getAge({ birthdate }: propsType): {
  year: number;
  month: number;
} {
  const now = new Date();

  let year = now.getFullYear() - birthdate.year;
  if (birthdate.month == -1) {
    return { year, month: 0 };
  }
  let month = now.getMonth() - birthdate.month;
  if (month < 0) {
    year -= 1;
    month += 12;
  }
  return { year, month };
}
