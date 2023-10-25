import { userInput } from "../../types";
import { UserModel } from "./Schemas";

type propsType = userInput;

export default async function addUser(input: propsType) {
  const id: string = Math.random().toString();
  UserModel.insertMany({ id, ...input })
    .then(() => {
      console.log("Пользователь успешно зарегистрирован");
    })
    .catch((error) => {
      console.log("Ошибка при добавлении:");
      console.log(error);
    });
}
