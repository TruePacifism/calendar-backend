import { Directions } from "../../enums";
import { coordinatesType, directionType } from "../../types";

type propsType = {
  livingcityCoordinates: coordinatesType;
  birthcityCoordinates: coordinatesType;
};

export default async function getMovedDirection({
  livingcityCoordinates,
  birthcityCoordinates,
}: propsType): Promise<directionType> {
  if (!livingcityCoordinates || !birthcityCoordinates) {
    return Directions.NULL_DIRECTION;
  }
  const { lat: livingLat, lng: livingLng } = livingcityCoordinates;
  const { lat: birthcityLat, lng: birthcityLng } = birthcityCoordinates;
  if (livingLat === birthcityLat && livingLng === birthcityLng) {
    return Directions.NULL_DIRECTION;
  }

  const directionX =
    livingLat > birthcityLat
      ? "запад"
      : livingLat < birthcityLat
      ? "восток"
      : "";
  const directionY =
    livingLng > birthcityLng ? "север" : livingLng < birthcityLng ? "юг" : "";
  switch (directionX) {
    case "восток":
      switch (directionY) {
        case "север":
          return Directions.NE;
        case "юг":
          return Directions.SE;
      }
    case "запад":
      switch (directionY) {
        case "север":
          return Directions.NW;
        case "юг":
          return Directions.SW;
      }
  }
}
