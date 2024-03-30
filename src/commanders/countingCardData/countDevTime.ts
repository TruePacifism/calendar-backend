import { cityType, dateType, inputDataType } from "../../types";
import date from "date-and-time";

type propsType = {
  birthdate: dateType;
  birthcity: cityType;
};

export default async function countDevTime({
  birthdate,
  birthcity,
}: propsType): Promise<dateType> {
  const { year, month, day, hour, minute } = birthdate;
  // Если время не будет задано
  if (hour === -1 || !birthcity) {
    return birthdate;
  }
  const dateObject = new Date(year, month, day, hour, minute);
  console.log(dateObject);

  console.log(birthcity);

  const devTime = (birthcity.UTC * 15 - birthcity.lon) * 4;
  const isSummerTime: boolean =
    (month > 2 && month < 9) ||
    (month === 2 && day > 27) ||
    (month === 9 && day < 30) ||
    (month === 2 && day === 27 && hour > 2) ||
    (month === 9 && day === 30 && hour < 2);
  console.log(birthcity.UTC);
  console.log(devTime);
  console.log(isSummerTime);
  console.log(devTime * -1 - (isSummerTime ? 0 : 60));

  const devTimedDateObject = date.addMinutes(
    dateObject,
    devTime * -1 - (isSummerTime ? 0 : 60)
  );
  const newBirthdate: dateType = {
    year: devTimedDateObject.getFullYear(),
    month: devTimedDateObject.getMonth(),
    day: devTimedDateObject.getDate(),
    hour: devTimedDateObject.getHours(),
    minute: devTimedDateObject.getMinutes(),
  };
  console.log(newBirthdate);

  return newBirthdate;
}
