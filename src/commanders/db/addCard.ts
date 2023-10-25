import { inputDataType, outputDataType } from "../../types";
import { CardModel, UserModel } from "./Schemas";

type propsType = {
  token: string;
  card: inputDataType;
};

export default async function addCard({ token, card }: propsType) {
  UserModel.findOneAndUpdate(
    { token },
    { $push: { cards: { id: "testId", ...card } } }
  )
    .then(() => {
      console.log("Успешное добавление карты");
    })
    .catch((error) => {
      console.error("Ошибка добавления:", error);
    });
}
