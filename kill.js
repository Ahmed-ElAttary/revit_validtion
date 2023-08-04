const { exec } = require("child_process");

function kill(pid) {
  try {
    const command = `taskkill /pid ${pid} /f`;
    exec(command);
  } catch (err) {
    console.log("error excuting", err);
  }
}
module.exports = kill;
