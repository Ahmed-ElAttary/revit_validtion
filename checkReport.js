const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const accessAsync = promisify(fs.access);
const checkReport = async (id) => {
    const filePath=`//192.168.1.21/New folder/${id}/report`
  try {
    await accessAsync(filePath, fs.constants.F_OK);
    return "exist";
  } catch (error) {
    return "not exist";
  }
};
module.exports = checkReport;
