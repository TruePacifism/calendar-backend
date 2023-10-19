import { coordinatesType } from "../../types";

type propsType = {
  cityName: string;
};

export default async function getCityCoordinates({
  cityName,
}: propsType): Promise<coordinatesType> {
  const opencage = require("opencage-api-client");

  const data = await opencage.geocode({ q: cityName });
  if (data.status.code === 200 && data.results.length > 0) {
    const place = data.results[0];
    const coordinates: coordinatesType = {
      lat: place.geometry.lat,
      lng: place.geometry.lng,
    };
    return coordinates;
  }
}
