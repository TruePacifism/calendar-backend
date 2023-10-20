"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCurrentPillar({ pillars }) {
    const now = new Date();
    const currentPillar = pillars.find((pillar) => (now.getFullYear() > pillar.year ||
        (now.getFullYear() === pillar.year && now.getMonth() > pillar.month)) &&
        (now.getFullYear() < pillar.year + 10 ||
            (now.getFullYear() === pillar.year + 10 &&
                now.getMonth() < pillar.month)));
    return currentPillar;
}
exports.default = getCurrentPillar;
//# sourceMappingURL=getCurrentPillar.js.map