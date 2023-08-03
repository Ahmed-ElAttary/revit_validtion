const { writeFile } = require("fs");
const path = require("path");
const util = require("util");
const writeFilePro = util.promisify(writeFile);
async function writeAutomation(filePath, reportPath) {
  try {
    const name = path.parse(filePath).name;
    const xml = `<?xml version="1.0" encoding="utf-8" ?>
    
    <AutomatedRun Cleanup="delete">

    <Model Path="${filePath}">
    
    <CheckSet Path="C:\\models\\bestpractices-2023.xml" ExportHtml="true" ExportExcel="true" HtmlFolder="${reportPath}" ExcelPath="${reportPath}\\report.xlsx" CheckLinks="true" />       
    
    </Model>
    
    </AutomatedRun>
    `;
    await writeFilePro(
      `C:\\ProgramData\\Autodesk\\AIT\\Model Checker\\2023\\Automated Runs\\${filePath}.xml`,
      xml
    );
  } catch (err) {
    console.log("error creating XML", err);
  }
}
module.exports = writeAutomation;
