import { MainElements } from "../../enums";
import { elementsCounted, mainElementType } from "../../types";

type propsType = {
  elements: elementsCounted;
};

export default function getMainElement({
  elements,
}: propsType): mainElementType {
  const mainElement = Object.values(MainElements).find((mainElement) =>
    mainElement.elements.includes(elements.year)
  );
  return mainElement;
}
