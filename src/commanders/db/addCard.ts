import { outputDataType } from "../../types";
import CardModel from "./Schemas";

type propsType = {
  card: outputDataType;
};

export default async function addCard({ card }: propsType) {
  CardModel.insertMany({ id: "test", ...card })
    .then(() => {
      console.log("Успешное добавление карты");
    })
    .catch((error) => {
      console.error("Ошибка добавления:", error);
    });
}
