import bodyParser from "body-parser";
import app from "./src/routes";

const port = 3000;

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);

  return console.log(`Express is listening at http://localhost:${port}`);
});
