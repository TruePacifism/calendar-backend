import { userInput } from "../../types";
import getCityCoordinates from "../countingCardData/getCityCoordinates";
import { UserModel } from "./Schemas";

type propsType = userInput;

const getUTC = async (city: string): Promise<number> => {
  const opencage = require("opencage-api-client");
  const response = await opencage.geocode({ q: city });
  if (
    response.status.code >= 200 &&
    response.status.code < 300 &&
    response.results.length > 0
  ) {
    const UTC = response.results[0].annotations.timezone.offset_sec / 3600;
    console.log(UTC);
    return UTC;
  }
  return 0;
};

export default async function authUser(input: propsType) {
  const { token, livingcity } = input;
  console.log("livingCity", livingcity);

  const id: string = Math.random().toString();
  const UTC = await getUTC(livingcity);
  const foundUser = await UserModel.findOne({ token });
  if (foundUser) {
    console.log("Пользователь существует");
    return foundUser;
  } else {
    UserModel.insertMany({ id, ...input, UTC })
      .then(() => {
        console.log("Пользователь успешно зарегистрирован");
      })
      .catch((error) => {
        console.log("Ошибка при добавлении:");
        console.log(error);
      });
  }
  return token;
}
