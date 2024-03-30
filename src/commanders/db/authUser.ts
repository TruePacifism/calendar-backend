import { cityType, userInput } from "../../types";
import getCityCoordinates from "../countingCardData/getCityCoordinates";
import { UserModel } from "./Schemas";

type propsType = userInput;

export default async function authUser(input: propsType) {
  const { token, livingcity } = input;

  const id: string = Math.random().toString();
  const UTC = livingcity.UTC;
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
