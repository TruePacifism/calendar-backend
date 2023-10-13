import express from "express";
import countDevTime from "./commanders/countingCardData/countDevTime";
import bodyParser from "body-parser";
import getCardData from "./commanders/countingCardData/getCardData";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/card", async (req, res) => {
  const result = await getCardData(req.body);
  res.json(result);
});
app.get("/test", (req, res) => {
  res.send("Testing");
});

export default app;
