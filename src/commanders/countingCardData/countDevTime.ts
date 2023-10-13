import { dateType, inputDataType } from "../../types";

type propsType = inputDataType;

export default async function countDevTime({
  birthdate,
  birthcity,
  name,
  gender,
  livingcity,
}: propsType): Promise<dateType> {
  const { year, month, day, hour, minute } = birthdate;
  const dateObject = new Date(year, month, day, hour, minute);

  const opencage = require("opencage-api-client");

  const data = await opencage.geocode({ q: birthcity });
  if (data.status.code === 200 && data.results.length > 0) {
    const place = data.results[0];
    const devTime =
      ((place.annotations.timezone.offset_sec / 3600) * 15 -
        place.geometry.lng) *
      4;
    dateObject.setMinutes(dateObject.getMinutes() - devTime);
    const newBirthdate: dateType = {
      year: dateObject.getFullYear(),
      month: dateObject.getMonth(),
      day: dateObject.getDate(),
      hour: dateObject.getHours(),
      minute: dateObject.getMinutes(),
    };
    return newBirthdate;
  }
}
