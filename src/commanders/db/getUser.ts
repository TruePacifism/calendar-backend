import { userInput } from "../../types";
import { UserModel } from "./Schemas";

type propsType = {
  token: string;
};

export default async function getUser({ token }: propsType) {
  const user = await UserModel.findOne({ token });
  console.log("Пользователь найден");
  return user;
}
