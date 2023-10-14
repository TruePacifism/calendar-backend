import express from "express";
import countDevTime from "./commanders/countingCardData/countDevTime";
import bodyParser from "body-parser";
import getCardData from "./commanders/countingCardData/getCardData";
import addCard from "./commanders/db/addCard";
import getCard from "./commanders/db/getCard";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/card", async (req, res) => {
  const card = await getCardData(req.body);
  console.log(Object.keys(card));

  await addCard({ card });
  res.send("Карта успешно добавлена");
});
app.get("/card:id", async (req, res) => {
  const { id } = req.params;
  const card = getCard({ id });
  res.json(card);
});
app.get("/test", (req, res) => {
  res.send("Testing");
});

export default app;
