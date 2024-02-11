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
Object.defineProperty(exports, "__esModule", { value: true });
const TOKEN = "ab9911f0-d8fa-4a84-bc03-deff6bf16f49";
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "ada648e142ad690535690892e99b4328476aa93b";
var secret = "ee1888bbbd215aac7ac056e5973ba24ba123bdef";
var testquery = "москва сухонская 11";
function getCitiesList({ query }) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.default = getCitiesList;
//# sourceMappingURL=getCitiesList.js.map