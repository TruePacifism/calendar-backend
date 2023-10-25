import { UserModel } from "./Schemas";

type propsType = {
  token: string;
  cardId: string;
};

export default async function deleteCard({ token, cardId }: propsType) {
  console.log(token);
  console.log(cardId);

  UserModel.findOneAndUpdate({ token }, { $pull: { cards: { id: cardId } } })
    .then(() => {
      console.log("Карта успешно удалена");
    })
    .catch((error) => {
      console.log("Ошибка при удалении карты");
      console.log(error);
    });
}
