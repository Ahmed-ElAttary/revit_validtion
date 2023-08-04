const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const accessAsync = promisify(fs.access);
const readdirAsync = promisify(fs.readdir);
const checkReport = async (filePath) => {
  try {
    await accessAsync(filePath, fs.constants.F_OK);
    const folderDir = fs
      .readdirSync(filePath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
    const report = fs.readdirSync(path.join(filePath, folderDir[0]));
    return path.join(filePath, folderDir[0], report[0]);
  } catch (error) {
    return "not exist";
  }
};
module.exports = checkReport;
