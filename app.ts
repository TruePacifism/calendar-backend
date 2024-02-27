import recountAllData from "./src/commanders/countingCardData/recountAllData";
import app from "./src/routes";
import mongoose from "mongoose";
import schedule from "node-schedule";
import TelegramBot from "node-telegram-bot-api";

// Укажи свой токен Telegram бота
const token = "6484002112:AAFAET6sbeb0U4GUsitOM9K0KHtxyv-KFlA";
const chatId = "809204367"; // Укажи ID чата, куда бот будет отправлять сообщения

const bot = new TelegramBot(token, { polling: true });

// Функция для отправки сообщения
function sendMessage() {
  bot.sendMessage(chatId, "Привет! Прими таблеточку, Красотуля 🥺");
}
// bot.setMyCommands([
//   { description: "Добавить новое ежедневное напоминание", command: "/add" },
// ]);
// Обработчик команды на добавление записи
// bot.onText(/\/add/, (msg, match) => {
//   const chatId = msg.chat.id;
//   let taskText = "";
//   let taskTime = "";
//   bot.sendMessage(chatId, `Дай название напоминанию`);
//   bot.on("text", (msg, match) => {
//     if (!taskText) {
//       taskText = msg.text;
//       bot.sendMessage(chatId, `Введи время в формате 23:59`);
//       bot.on("text", (msg, match) => {
//         taskTime = msg.text;
//         bot.sendMessage(chatId, `Новое напоминание ${taskText} в ${taskTime}`);
//       });
//     }
//   });
// });
// Устанавливаем расписание для отправки каждый день в 12:00
schedule.scheduleJob("30 20 * * *", () => {
  sendMessage();
});

console.log("Бот запущен. Ожидание сообщений...");

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
  // recountAllData();
  setInterval(recountAllData, 86_400_000);

  return console.log(`Express is listening at http://localhost:${port}`);
});
