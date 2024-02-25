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
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const body_parser_1 = __importDefault(require("body-parser"));
const getCardData_1 = __importDefault(require("./commanders/countingCardData/getCardData"));
const addCard_1 = __importDefault(require("./commanders/db/addCard"));
const getCard_1 = __importDefault(require("./commanders/db/getCard"));
const joiSchemas_1 = require("./joiSchemas");
const cors_1 = __importDefault(require("cors"));
const deleteCard_1 = __importDefault(require("./commanders/db/deleteCard"));
const getCitiesList_1 = __importDefault(require("./commanders/utils/getCitiesList"));
const getUser_1 = __importDefault(require("./commanders/db/getUser"));
const authUser_1 = __importDefault(require("./commanders/db/authUser"));
const recountAllData_1 = __importDefault(require("./commanders/countingCardData/recountAllData"));
const getHourCollisionsFrames_1 = __importDefault(require("./commanders/countingCardData/getHourCollisionsFrames"));
const deleteUser_1 = __importDefault(require("./commanders/db/deleteUser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
// Создаем файл логов
const accessLogStream = fs.createWriteStream(path.join("./access.log"), {
    flags: "a",
});
// Настраиваем логгер
app.use(morgan("combined", { stream: accessLogStream }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const input = req.body;
    const token = yield (0, authUser_1.default)(yield joiSchemas_1.userInputSchema.validateAsync(input));
    res.send(token);
}));
app.get("/login/:token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    const user = yield (0, getUser_1.default)({ token });
    res.json(user);
}));
app.delete("/login/:token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    const result = yield (0, deleteUser_1.default)({ token });
    res.send(result);
}));
app.post("/card/:token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardInput = req.body;
    const id = yield (0, addCard_1.default)({ card: cardInput, token: req.params.token });
    res.json({ id });
}));
app.delete("/card/:token/:cardId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, cardId } = req.params;
    yield (0, deleteCard_1.default)({ token, cardId });
    res.send("Карта успешно удалена");
}));
app.get("/card", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (typeof id === "string") {
        const card = yield (0, getCard_1.default)({ id });
        res.json(card);
    }
}));
app.get("/count", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.query !== "object") {
        return;
    }
    try {
        const inputData = yield joiSchemas_1.inputDataSchema.validateAsync(req.query);
        const card = yield (0, getCardData_1.default)(inputData);
        res.json(card);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}));
app.get("/collisionframes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield joiSchemas_1.collisionsFramesInputSchema.validateAsync(req.query);
    const { birthdate, trueBirthdate } = query;
    const frames = (0, getHourCollisionsFrames_1.default)({ birthdate, trueBirthdate });
    res.json(frames);
}));
app.get("/city/:query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.params;
    const cities = yield (0, getCitiesList_1.default)({ query });
    res.json(cities);
}));
app.patch("/recount", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, recountAllData_1.default)();
    res.send(result);
}));
exports.default = app;
//# sourceMappingURL=routes.js.map