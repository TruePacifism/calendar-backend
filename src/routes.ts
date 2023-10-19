import express from "express";
import countDevTime from "./commanders/countingCardData/countDevTime";
import bodyParser from "body-parser";
import getCardData from "./commanders/countingCardData/getCardData";
import addCard from "./commanders/db/addCard";
import getCard from "./commanders/db/getCard";
import { inputDataType } from "./types";
import { inputDataSchema } from "./joiSchemas";

const app = express();
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

app.post("/card", async (req, res) => {
  const card = await getCardData(req.body);

  await addCard({ card });
  res.send("Карта успешно добавлена");
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

  const inputData: inputDataType = await inputDataSchema.validateAsync(
    req.query
  );
  console.log(inputData);

  const card = await getCardData(inputData);
  res.json(card);
});
app.get("/test", (req, res) => {
  res.send("Testing");
});

export default app;
