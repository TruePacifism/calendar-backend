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
app.get("/test", (req, res) => {
  res.send("Testing");
});

export default app;
