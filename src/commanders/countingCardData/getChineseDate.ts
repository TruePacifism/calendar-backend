import { Animals } from "../../enums";
import { animalsCounted, chineseDate, dateType } from "../../types";

export default function getChineseDate(
  trueBirthdate: dateType,
  animals: animalsCounted
): chineseDate {
  const chineseBirthdate: chineseDate = { ...trueBirthdate };
  console.log(chineseBirthdate);

  if (
    animals.month &&
    Animals[trueBirthdate.month] &&
    animals.month.name !== Animals[trueBirthdate.month].name
  ) {
    console.log(animals.month);
    console.log(trueBirthdate.month);
    chineseBirthdate.month -= 1;
  }
  if (animals.month === Animals.BULL) {
    chineseBirthdate.year -= 1;
  }
  console.log(chineseBirthdate);
  return chineseBirthdate;
}
