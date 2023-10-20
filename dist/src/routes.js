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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const getCardData_1 = __importDefault(require("./commanders/countingCardData/getCardData"));
const addCard_1 = __importDefault(require("./commanders/db/addCard"));
const getCard_1 = __importDefault(require("./commanders/db/getCard"));
const joiSchemas_1 = require("./joiSchemas");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.post("/card", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const card = yield (0, getCardData_1.default)(req.body);
    yield (0, addCard_1.default)({ card });
    res.send("Карта успешно добавлена");
}));
app.get("/card", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    console.log(id);
    if (typeof id === "string") {
        const card = yield (0, getCard_1.default)({ id });
        res.json(card);
    }
}));
app.get("/count", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.query !== "object") {
        console.log(req.query);
        return;
    }
    console.log(typeof req.query);
    try {
        const inputData = yield joiSchemas_1.inputDataSchema.validateAsync(req.query);
        console.log(inputData);
        const card = yield (0, getCardData_1.default)(inputData);
        res.json(card);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}));
app.get("/test", (req, res) => {
    res.send("Testing");
});
exports.default = app;
//# sourceMappingURL=routes.js.map