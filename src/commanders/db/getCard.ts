import CardModel from "./Schemas";

type propsType = {
  id: string;
};

export default async function getCard({ id }: propsType) {
  const card = await CardModel.findById(id);
  return card;
}
