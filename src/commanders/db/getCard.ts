import { CardModel } from "./Schemas";

type propsType = {
  id: string;
};

export default async function getCard({ id }: propsType) {
  const card = (await CardModel.findOne({ id })).toJSON();

  return card;
}
