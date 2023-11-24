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
import deleteCard from "./commanders/db/deleteCard";
import getCitiesList from "./commanders/utils/getCitiesList";
import getUser from "./commanders/db/getUser";
import authUser from "./commanders/db/authUser";
import recountAllData from "./commanders/countingCardData/recountAllData";

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
    console.log(inputData);

    const card = await getCardData(inputData);
    res.json(card);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
app.get("/today", async (req, res) => {
  console.log(req.query);

  const query: todayInputData = await todayInputSchema.validateAsync(req.query);
  const { user } = query;
  const todayData = await countToday({ user });
  res.json(todayData);
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
