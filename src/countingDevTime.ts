import { dateType } from "./types";

type propsType = {
  date: dateType;
  city: string;
};

export default function countingDevTime({ date, city }: propsType) {
  const { year, month, day, hour, minute } = date;
  const dateObject = new Date(year, month - 1, day, hour, minute);

  const opencage = require("opencage-api-client");

  // note that the library takes care of URI encoding
  opencage
    .geocode({ q: city })
    .then((data) => {
      // console.log(JSON.stringify(data));
      if (data.status.code === 200 && data.results.length > 0) {
        const place = data.results[0];
        const devTime =
          ((data.results[0].annotations.timezone.offset_sec / 3600) * 15 -
            data.results[0].geometry.lng) *
          4;
        console.log(devTime);
        console.log(dateObject);
        dateObject.setMinutes(dateObject.getMinutes() + devTime);
        console.log(dateObject);
        return dateObject;
      } else {
        console.log("Status", data.status.message);
        console.log("total_results", data.total_results);
      }
    })
    .catch((error) => {
      // console.log(JSON.stringify(error));
      console.log("Error", error.message);
      // other possible response codes:
      // https://opencagedata.com/api#codes
      if (error.status.code === 402) {
        console.log("hit free trial daily limit");
        console.log("become a customer: https://opencagedata.com/pricing");
      }
    });

  // ... prints
  // Theresienhöhe 11, 80339 Munich, Germany
  // { lat: 48.1341651, lng: 11.5464794 }
  // Europe/Berlin
}
