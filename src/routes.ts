import express from "express";
import countDevTime from "./commanders/countingCardData/countDevTime";
import bodyParser from "body-parser";
import getCardData from "./commanders/countingCardData/getCardData";
import addCard from "./commanders/db/addCard";
import getCard from "./commanders/db/getCard";
import { inputDataType, todayInputData } from "./types";
import {
  inputDataSchema,
  todayInputSchema,
  userInputSchema,
} from "./joiSchemas";
import cors from "cors";
import countToday from "./commanders/countingCardData/countToday";
import addUser from "./commanders/db/addUser";
import deleteCard from "./commanders/db/deleteCard";
import getCitiesList from "./commanders/utils/getCitiesList";

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/user", async (req, res) => {
  const input = req.query;
  await addUser(await userInputSchema.validateAsync(input));

  res.send("Пользователь успешно зарегистрирован");
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
  console.log(id);
  if (typeof id === "string") {
    const card = await getCard({ id });
    res.json(card);
  }
});
app.get("/count", async (req, res) => {
  if (typeof req.query !== "object") {
    console.log(req.query);

    return;
  }
  console.log(typeof req.query);

  try {
    const inputData: inputDataType = await inputDataSchema.validateAsync(
      req.query
    );
    console.log(inputData);

    const card = await getCardData(inputData);
    res.json(card);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
app.get("/today", async (req, res) => {
  const query: todayInputData = await todayInputSchema.validateAsync(req.query);
  const todayData = await countToday(query);
  res.json(todayData);
});
app.get("/city/:query", async (req, res) => {
  const { query } = req.params;
  const cities = await getCitiesList({ query });
  res.json(cities);
});

export default app;
