import { UserModel } from "../db/Schemas";
import getCardData from "./getCardData";

export default async function recountAllData(): Promise<string> {
  const users = await UserModel.find({});
  users.forEach(async (user) => {
    user.cards = await Promise.all(
      user.cards.map(async (card) => {
        const { birthcity, birthdate, gender, livingcity, name } = card;
        if (gender !== "male" && gender !== "" && gender !== "female") {
          return;
        }
        const newCard = await getCardData({
          birthcity,
          birthdate,
          gender,
          livingcity,
          name,
        });
        card = {
          ...card,
          ...newCard,
        };
        return { ...card, ...newCard };
      })
    );
    user.save();
  });
  return "Все карты пересчитаны";
}
