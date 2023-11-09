import { userInput } from "../../types";
import { UserModel } from "./Schemas";

type propsType = userInput;

export default async function authUser(input: propsType) {
  const { token } = input;
  const id: string = Math.random().toString();
  const foundUser = await UserModel.findOne({ token });
  if (foundUser) {
    console.log("Пользователь существует");
    return foundUser;
  } else {
    UserModel.insertMany({ id, ...input })
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
