import express from "express";
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
import countDevTime from "./commanders/countingCardData/countDevTime";
import bodyParser from "body-parser";
import getCardData from "./commanders/countingCardData/getCardData";
import addCard from "./commanders/db/addCard";
import getCard from "./commanders/db/getCard";
import { dateType, inputDataType, todayInputData } from "./types";
import {
  collisionsFramesInputSchema,
  inputDataSchema,
  userInputSchema,
} from "./joiSchemas";
import cors from "cors";
import deleteCard from "./commanders/db/deleteCard";
import getCitiesList from "./commanders/utils/getCitiesList";
import getUser from "./commanders/db/getUser";
import authUser from "./commanders/db/authUser";
import recountAllData from "./commanders/countingCardData/recountAllData";
import getHourCollisionsFrames from "./commanders/countingCardData/getHourCollisionsFrames";
import deleteUser from "./commanders/db/deleteUser";

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Создаем файл логов
const accessLogStream = fs.createWriteStream(path.join("./access.log"), {
  flags: "a",
});

// Настраиваем логгер
app.use(morgan("combined", { stream: accessLogStream }));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/login", async (req, res) => {
  const input = req.body;
  const token = await authUser(await userInputSchema.validateAsync(input));

  res.send(token);
});
app.get("/login/:token", async (req, res) => {
  const { token } = req.params;
  const user = await getUser({ token });

  res.json(user);
});
app.delete("/login/:token", async (req, res) => {
  const { token } = req.params;
  const result = await deleteUser({ token });

  res.send(result);
});
app.post("/card/:token", async (req, res) => {
  const cardInput = req.body;

  await addCard({ card: cardInput, token: req.params.token });
  res.send("Карта успешно добавлена");
});
app.delete("/card/:token/:cardId", async (req, res) => {
  const { token, cardId } = req.params;
  await deleteCard({ token, cardId });
  res.send("Карта успешно удалена");
});
app.get("/card", async (req, res) => {
  const { id } = req.query;
  if (typeof id === "string") {
    const card = await getCard({ id });
    res.json(card);
  }
});
app.get("/count", async (req, res) => {
  if (typeof req.query !== "object") {
    return;
  }

  try {
    const inputData: inputDataType = await inputDataSchema.validateAsync(
      req.query
    );

    const card = await getCardData(inputData);
    res.json(card);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
app.get("/collisionframes", async (req, res) => {
  const query: { birthdate: dateType; trueBirthdate: dateType } =
    await collisionsFramesInputSchema.validateAsync(req.query);
  const { birthdate, trueBirthdate } = query;
  const frames = getHourCollisionsFrames({ birthdate, trueBirthdate });
  res.json(frames);
});
app.get("/city/:query", async (req, res) => {
  const { query } = req.params;
  const cities = await getCitiesList({ query });
  res.json(cities);
});
app.patch("/recount", async (req, res) => {
  const result = await recountAllData();
  res.send(result);
});

export default app;
