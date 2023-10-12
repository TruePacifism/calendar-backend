import express from "express";
import countDevTime from "./commanders/countDevTime";
import bodyParser from "body-parser";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/card", async (req, res) => {
  const result = await countDevTime(req.body);
  console.log(result);
  res.json(result);
});
app.get("/test", (req, res) => {
  res.send("Testing");
});

export default app;
