import express from "express";
import countingDevTime from "./countingDevTime";
const app = express();
const port = 3000;

console.log(
  countingDevTime({
    date: {
      year: 2003,
      month: 1,
      day: 8,
      hour: 22,
      minute: 30,
    },
    city: "Питер",
  })
);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
