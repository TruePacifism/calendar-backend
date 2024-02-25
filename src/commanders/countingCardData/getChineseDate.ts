import { Animals } from "../../enums";
import { animalsCounted, chineseDate, dateType } from "../../types";

export default function getChineseDate(
  trueBirthdate: dateType,
  animals: animalsCounted
): chineseDate {
  const chineseBirthdate: chineseDate = { ...trueBirthdate };

  if (
    animals.month &&
    Animals[trueBirthdate.month] &&
    animals.month.name !== Animals[trueBirthdate.month].name
  ) {
    chineseBirthdate.month -= 1;
  }
  if (animals.month === Animals.BULL) {
    chineseBirthdate.year -= 1;
  }
  return chineseBirthdate;
}
