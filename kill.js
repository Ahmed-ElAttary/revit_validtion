const { exec } = require("child_process");

const util = require("util");
const execPro = util.promisify(exec);

async function kill(pid) {
  try {

    const command = `taskkill /pid ${pid} /f`;
     exec(command);
  } catch (err) {
    console.log("error excuting", err);
  }
}
module.exports = kill;
