"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recountAllData_1 = __importDefault(require("./src/commanders/countingCardData/recountAllData"));
const routes_1 = __importDefault(require("./src/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
// interface Card {
//   livingcity: string;
//   birthcity: string;
// }
// fs.readFile("./data.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Ошибка чтения файла:", err);
//     return;
//   }
//   try {
//     const jsonData = JSON.parse(data);
//     const cards: Card[] = jsonData.cards;
//     let i = 0;
//     const interval = setInterval(async () => {
//       if (cards[i].livingcity === "") {
//         jsonData.cards[i].livingcity = null;
//       } else if (typeof cards[i].livingcity === "object") {
//       } else {
//         await getCitiesList({ query: cards[i].livingcity }).then((res) => {
//           jsonData.cards[i].livingcity = res[0];
//         });
//       }
//       if (cards[i].birthcity === "") {
//         jsonData.cards[i].birthcity = null;
//       } else {
//         await getCitiesList({ query: cards[i].birthcity }).then((res) => {
//           jsonData.cards[i].birthcity = res[0];
//         });
//       }
//       i++;
//       if (i === cards.length) {
//         fs.writeFileSync("./newData.json", JSON.stringify(jsonData));
//         clearInterval(interval);
//       }
//     }, 500);
//     cards.forEach((card, index) => {
//       console.log(`Карта ${index + 1}:`);
//       console.log(`Город проживания: ${card.livingcity}`);
//       console.log(`Город рождения: ${card.birthcity}\n`);
//     });
//   } catch (error) {
//     console.error("Ошибка парсинга JSON:", error);
//   }
// });
// Укажи свой токен Telegram бота
// const token = "6484002112:AAFAET6sbeb0U4GUsitOM9K0KHtxyv-KFlA";
// const chatId = "809204367"; // Укажи ID чата, куда бот будет отправлять сообщения
// const myId = "1343339845";
// const bot = new TelegramBot(token, { polling: true });
// // Функция для отправки сообщения
// function sendMessage() {
//   bot.sendMessage(chatId, "Привет! Прими таблеточку, Красотуля 🥺");
//   bot.sendMessage(myId, "Привет! Прими таблеточку, Красотуля 🥺");
// }
// // bot.setMyCommands([
// //   { description: "Добавить новое ежедневное напоминание", command: "/add" },
// // ]);
// // Обработчик команды на добавление записи
// // bot.onText(/\/add/, (msg, match) => {
// //   const chatId = msg.chat.id;
// //   let taskText = "";
// //   let taskTime = "";
// //   bot.sendMessage(chatId, `Дай название напоминанию`);
// //   bot.on("text", (msg, match) => {
// //     if (!taskText) {
// //       taskText = msg.text;
// //       bot.sendMessage(chatId, `Введи время в формате 23:59`);
// //       bot.on("text", (msg, match) => {
// //         taskTime = msg.text;
// //         bot.sendMessage(chatId, `Новое напоминание ${taskText} в ${taskTime}`);
// //       });
// //     }
// //   });
// // });
// // Устанавливаем расписание для отправки каждый день в 12:00
// schedule.scheduleJob("00 20 * * *", () => {
//   sendMessage();
// });
// console.log("Бот запущен. Ожидание сообщений...");
const port = 3000;
const connectToMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect("mongodb+srv://TruePacifism:vector2323@nodejs-homework.rluvyh6.mongodb.net/Calendar");
    console.log("Connected to MongoDB");
});
connectToMongoDB();
routes_1.default.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
    // recountAllData();
    setInterval(recountAllData_1.default, 86400000);
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map