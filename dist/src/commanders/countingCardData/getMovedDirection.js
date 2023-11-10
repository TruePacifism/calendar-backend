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
const enums_1 = require("../../enums");
function getMovedDirection({ livingcityCoordinates, birthcityCoordinates, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!livingcityCoordinates || !birthcityCoordinates) {
            return enums_1.Directions.NULL_DIRECTION;
        }
        const { lat: livingLat, lng: livingLng } = livingcityCoordinates;
        const { lat: birthcityLat, lng: birthcityLng } = birthcityCoordinates;
        const directionX = livingLat > birthcityLat
            ? "запад"
            : livingLat < birthcityLat
                ? "восток"
                : "";
        const directionY = livingLng > birthcityLng ? "север" : livingLng < birthcityLng ? "юг" : "";
        switch (directionX) {
            case "восток":
                switch (directionY) {
                    case "север":
                        return enums_1.Directions.NE;
                    case "юг":
                        return enums_1.Directions.SE;
                }
            case "запад":
                switch (directionY) {
                    case "север":
                        return enums_1.Directions.NW;
                    case "юг":
                        return enums_1.Directions.SW;
                }
        }
    });
}
exports.default = getMovedDirection;
//# sourceMappingURL=getMovedDirection.js.map