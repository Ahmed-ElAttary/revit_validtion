const { writeFile } = require("fs");
const path = require("path");
const util = require("util");
const writeFilePro = util.promisify(writeFile);
async function writeAutomation(filePath, reportPath, id) {
  try {
    const xml = `<?xml version="1.0" encoding="utf-8" ?>
    
    <AutomatedRun Cleanup="delete">

    <Model Path="${filePath}">
    
    <CheckSet Path="C:\\\\validation\\checkset\\bestpractices-2023.xml" ExportHtml="true" ExportExcel="true" HtmlFolder="${reportPath}" ExcelPath="${reportPath}\\report.xlsx" CheckLinks="true" />       
    
    </Model>
    
    </AutomatedRun>
    `;
    await writeFilePro(
      `C:\\\\ProgramData\\Autodesk\\AIT\\Model Checker\\2023\\Automated Runs\\${id}.xml`,
      xml
    );
  } catch (err) {
    console.log("error creating XML", err);
  }
}
module.exports = writeAutomation;
