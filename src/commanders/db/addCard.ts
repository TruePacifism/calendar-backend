import { inputDataType, outputDataType } from "../../types";
import { CardModel, UserModel } from "./Schemas";
import { v4 as uuidv4 } from "uuid";

type propsType = {
  token: string;
  card: inputDataType;
};

export default async function addCard({ token, card }: propsType) {
  const id: string = uuidv4();
  await UserModel.findOneAndUpdate(
    { token },
    { $push: { cards: { id, ...card } } }
  )
    .then(() => {
      console.log("Успешное добавление карты");
    })
    .catch((error) => {
      console.error("Ошибка добавления:", error);
    });
  return id;
}
