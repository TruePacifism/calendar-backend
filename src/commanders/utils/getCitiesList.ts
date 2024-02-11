import axios from "axios";

type propsType = {
  query: string;
};

const TOKEN = "ab9911f0-d8fa-4a84-bc03-deff6bf16f49";

var url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "ada648e142ad690535690892e99b4328476aa93b";
var secret = "ee1888bbbd215aac7ac056e5973ba24ba123bdef";
var testquery = "москва сухонская 11";

export default async function getCitiesList({ query }: propsType) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({
      query,
      from_bound: { value: "city" },
      to_bound: { value: "settlement" },
    }),
  });
  const responseJSON = await response.json();
  console.log(responseJSON);

  if (!responseJSON) {
    return;
  }

  const output = responseJSON.suggestions.map((city) => {
    return {
      name: city.value,
    };
  });
  // const output = response.data.map((city) => {
  //   return {
  //     name: `${city.name}, ${city.state}, ${city.country}`,
  //     coordinates: city.geometry,
  //   };
  // });

  return output;
}
