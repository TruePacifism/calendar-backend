import { UserModel } from "./Schemas";

type propsType = {
  token: string;
};

export default async function deleteUser({ token }: propsType) {
  const result = await UserModel.deleteOne({ token });

  return result;
}
