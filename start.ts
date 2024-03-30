import { exec } from "child_process";

const buildAndRun = () => {
  const buildProcess = exec("tsc");

  buildProcess.on("close", (code) => {
    if (code === 0) {
      console.log("Компиляция успешно завершена. Запуск приложения...");
      exec("node dist/src/app.js");
    }
  });
};
const start = () => {
  console.log("Запуск скрипта наблюдения за изменениями файлов...");

  buildAndRun();

  const watcher = exec(`nodemon -w src -e ts --exec "${buildAndRun}"`);

  watcher.stdout?.pipe(process.stdout);
  watcher.stderr?.pipe(process.stderr);
};

start();
