import { dateType, pillarType } from "../../types";

type propsType = {
  pillars: pillarType[];
};

export default function getCurrentPillar({ pillars }: propsType): pillarType {
  const now = new Date();
  const currentPillar = pillars.find(
    (pillar) =>
      (now.getFullYear() > pillar.year ||
        (now.getFullYear() === pillar.year && now.getMonth() > pillar.month)) &&
      (now.getFullYear() < pillar.year + 10 ||
        (now.getFullYear() === pillar.year + 10 &&
          now.getMonth() < pillar.month))
  );
  return currentPillar;
}
