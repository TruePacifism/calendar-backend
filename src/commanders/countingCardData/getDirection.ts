import { Directions } from "../../enums";
import { customEnumType, dateType, directionType } from "../../types";

type propsType = {
  birthdate: dateType;
};

export default function getDirection({ birthdate }: propsType): directionType {
  const { year, month } = birthdate;
  if (month === -1) {
    switch (year) {
      case 0:
      case 1:
        return Directions.W;
      case 2:
      case 3:
        return Directions.N;
      case 4:
      case 5:
        return Directions.E;
      case 6:
      case 7:
        return Directions.S;
      case 8:
      case 9:
        return Directions.C;
      default:
        return Directions.NULL_DIRECTION;
    }
  }
  if (month === 0) {
    return {
      shortName: "С",
      fullName: "Север",
    };
  }
  switch (year % 10) {
    case 0:
    case 1:
      switch (month) {
        case 1:
        case 10:
        case 11:
          return Directions.NW;
        case 2:
        case 3:
        case 8:
        case 9:
          return Directions.W;
        case 4:
        case 5:
        case 6:
        case 7:
          return Directions.SW;
      }
    case 2:
    case 3:
      switch (month) {
        case 1:
        case 3:
        case 6:
        case 11:
          return Directions.N;
        case 7:
        case 8:
        case 9:
        case 10:
          return Directions.NW;
        case 2:
        case 4:
        case 5:
        case 7:
          return Directions.NE;
      }
    case 4:
    case 5:
      switch (month) {
        case 1:
        case 11:
          return Directions.NE;
        case 2:
        case 3:
        case 4:
        case 8:
        case 9:
        case 10:
          return Directions.E;
        case 5:
        case 6:
        case 7:
          return Directions.SE;
      }
    case 6:
    case 7:
      switch (month) {
        case 1:
        case 8:
        case 9:
        case 10:
        case 11:
          return Directions.SW;
        case 5:
        case 6:
        case 7:
          return Directions.S;
        case 2:
        case 3:
        case 4:
          return Directions.SE;
      }
    case 8:
    case 9:
      switch (month) {
        case 1:
        case 11:
          return Directions.CN;
        case 2:
        case 3:
        case 4:
          return Directions.CE;
        case 5:
        case 6:
        case 7:
          return Directions.CS;
        case 8:
        case 9:
        case 10:
          return Directions.CW;
      }
  }
}
