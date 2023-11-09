import { userInput } from "../../types";
import { UserModel } from "./Schemas";

type propsType = {
  token: string;
};

export default async function isExistingUser({ token }: propsType) {
  const isExisting: boolean = await UserModel.findOne({ token });
  console.log("Пользователь найден");
  return isExisting;
}
