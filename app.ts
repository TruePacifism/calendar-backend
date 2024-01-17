import app from "./src/routes";
import mongoose from "mongoose";

const port = 3000;

const connectToMongoDB = async () => {
  mongoose.connect(
    "mongodb+srv://TruePacifism:vector2323@nodejs-homework.rluvyh6.mongodb.net/Calendar"
  );
  console.log("Connected to MongoDB");
};

connectToMongoDB();

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);

  return console.log(`Express is listening at http://localhost:${port}`);
});
