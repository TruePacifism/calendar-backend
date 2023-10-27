type propsType = {
  query: string;
};

export default async function getCitiesList({ query }: propsType) {
  const opencage = require("opencage-api-client");

  const response = await opencage.geocode({ q: query });
  const output = response.results.map((city) => {
    return {
      name: city.formatted,
      coordinates: city.geometry,
    };
  });

  return output;
}
