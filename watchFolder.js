const chokidar = require("chokidar");

async function watchFolder(folderPath, callback) {
  // Watch the current directory for changes
  chokidar.watch(folderPath).on("add", async (path) => await callback());
}
module.exports = watchFolder;
