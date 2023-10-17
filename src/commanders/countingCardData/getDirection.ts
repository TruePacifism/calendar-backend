import { dateType, directionType } from "../../types";

type propsType = {
  birthdate: dateType;
};

export default function getDirection({ birthdate }: propsType): directionType {
  const { year, month } = birthdate;
  if (month === 0) {
    return {
      shortName: "С",
      fullName: "Север",
    };
  }
}
