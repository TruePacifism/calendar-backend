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
const node_schedule_1 = __importDefault(require("node-schedule"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
// Укажи свой токен Telegram бота
const token = "6484002112:AAFAET6sbeb0U4GUsitOM9K0KHtxyv-KFlA";
const chatId = "1343339845"; // Укажи ID чата, куда бот будет отправлять сообщения
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
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
node_schedule_1.default.scheduleJob("30 20 * * *", () => {
    sendMessage();
});
console.log("Бот запущен. Ожидание сообщений...");
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