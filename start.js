const { exec } = require("child_process");

const util = require("util");
const execPro = util.promisify(exec);

async function start() {
  try {
    const command = `cd C:\\Program Files\\Autodesk\\Revit 2023\\ && start /wait Revit.exe `;
    const command2 = `tasklist /FI "IMAGENAME eq Revit.exe" /NH /FO CSV | Find "," `;
    const run = exec(command);
    const { stdout, stderr } = await execPro(command2);
    const pid = stdout.split(",")[1].replaceAll(`"`, ``);
    return pid;
  } catch (err) {
    console.log("error excuting", err);
  }
}
module.exports = start;

// Start Revit
