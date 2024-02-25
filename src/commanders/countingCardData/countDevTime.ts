import { dateType, inputDataType } from "../../types";
import date from "date-and-time";

type propsType = {
  birthdate: dateType;
  birthcity: string;
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

  const opencage = require("opencage-api-client");

  const data = await opencage.geocode({ q: birthcity });
  if (data.status.code === 200 && data.results.length > 0) {
    const place = data.results[0];

    const devTime =
      ((place.annotations.timezone.offset_sec / 3600) * 15 -
        place.geometry.lng) *
      4;
    const isSummerTime: boolean =
      (month > 2 && month < 9) ||
      (month === 2 && day > 27) ||
      (month === 9 && day < 30) ||
      (month === 2 && day === 27 && hour > 2) ||
      (month === 9 && day === 30 && hour < 2);
    const devTimedDateObject = date.addMinutes(
      dateObject,
      devTime * -1 - (isSummerTime ? 60 : 0)
    );
    const newBirthdate: dateType = {
      year: devTimedDateObject.getFullYear(),
      month: devTimedDateObject.getMonth(),
      day: devTimedDateObject.getDate(),
      hour: devTimedDateObject.getHours(),
      minute: devTimedDateObject.getMinutes(),
    };

    return newBirthdate;
  }
}
