import { inputDataType, outputDataType } from "../../types";
import getCardData from "./getCardData";

type propsType = {
  city: string;
};

export default async function countToday({
  city,
}: propsType): Promise<outputDataType> {
  const now = new Date();
  const todayProps: inputDataType = {
    name: "сегодня",
    birthcity: "Черемхово",
    livingcity: "Санкт-петербург",
    birthdate: {
      year: now.getFullYear(),
      month: now.getMonth(),
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
    },
    gender: "male",
  };
  const todayData = await getCardData(todayProps);
  return todayData;
}
