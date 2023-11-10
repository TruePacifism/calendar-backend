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
function getCityCoordinates({ cityName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cityName) {
            return null;
        }
        const opencage = require("opencage-api-client");
        const data = yield opencage.geocode({ q: cityName });
        if (data.status.code === 200 && data.results.length > 0) {
            const place = data.results[0];
            const coordinates = {
                lat: place.geometry.lat,
                lng: place.geometry.lng,
            };
            return coordinates;
        }
    });
}
exports.default = getCityCoordinates;
//# sourceMappingURL=getCityCoordinates.js.map