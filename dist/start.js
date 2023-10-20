"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const buildAndRun = () => {
    const buildProcess = (0, child_process_1.exec)("tsc");
    buildProcess.on("close", (code) => {
        if (code === 0) {
            console.log("Компиляция успешно завершена. Запуск приложения...");
            (0, child_process_1.exec)("node dist/src/app.js");
        }
    });
};
const start = () => {
    var _a, _b;
    console.log("Запуск скрипта наблюдения за изменениями файлов...");
    buildAndRun();
    const watcher = (0, child_process_1.exec)(`nodemon -w src -e ts --exec "${buildAndRun}"`);
    (_a = watcher.stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout);
    (_b = watcher.stderr) === null || _b === void 0 ? void 0 : _b.pipe(process.stderr);
};
start();
//# sourceMappingURL=start.js.map