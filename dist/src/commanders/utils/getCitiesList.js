"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const TOKEN = "ab9911f0-d8fa-4a84-bc03-deff6bf16f49";
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "ada648e142ad690535690892e99b4328476aa93b";
var secret = "ee1888bbbd215aac7ac056e5973ba24ba123bdef";
var testquery = "москва сухонская 11";
function getCitiesList({ query }) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("query", query);
        const response = yield fetch(url, {
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
        const responseJSON = yield response.json();
        if (!responseJSON) {
            return;
        }
        // const test = await fetch(
        //   `https://timeapi.io/api/TimeZone/coordinate?latitude=${56}&longitude=${43}`,
        //   { method: "get" }
        // );
        // console.log("test", test.body);
        const UTCsResponse = yield Promise.all(responseJSON.suggestions
            .filter((city) => city.data.geo_lat && city.data.geo_lon)
            .map((city) => {
            console.log(city.data.geo_lat, city.data.geo_lon);
            return (0, axios_1.default)(`https://timeapi.io/api/TimeZone/coordinate?latitude=${city.data.geo_lat}&longitude=${city.data.geo_lon}`);
        }));
        const UTCs = UTCsResponse.map((res) => res.data.currentUtcOffset.seconds / 3600);
        console.log(UTCs);
        const output = responseJSON.suggestions
            .map((city, idx) => {
            return {
                fullName: city.value,
                shortName: city.data.settlement_with_type || city.data.city_with_type,
                lat: city.data.geo_lat,
                lon: city.data.geo_lon,
                UTC: UTCs[idx],
            };
        })
            .filter((city) => city.lat && city.lon);
        // const output = response.data.map((city) => {
        //   return {
        //     name: `${city.name}, ${city.state}, ${city.country}`,
        //     coordinates: city.geometry,
        //   };
        // });
        return output;
    });
}
exports.default = getCitiesList;
//# sourceMappingURL=getCitiesList.js.map