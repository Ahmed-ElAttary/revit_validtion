// <?xml version="1.0" encoding="utf-8" ?>

// <AutomatedRun Cleanup="delete">

//   <Model Path="C:\models\racadvancedsampleproject.rvt">

//     <CheckSet Path="C:\models\Revit Model Dashboard.xml" ExportHtml="true" ExportExcel="true" HtmlFolder="C:\models\Folder2" ExcelPath="C:\models\Path.xlsx" CheckLinks="true" />

//   </Model>

// </AutomatedRun>
const { writeFile } = require("fs");

const util = require("util");
const writeFilePro = util.promisify(writeFile);
async function writeAutomation() {
  try {
    const xml = `<?xml version="1.0" encoding="utf-8" ?>
    
    <AutomatedRun Cleanup="delete">

    <Model Path="C:\\models\\racadvancedsampleproject.rvt">
    
    <CheckSet Path="C:\\models\\Revit Model Dashboard.xml" ExportHtml="true" ExportExcel="true" HtmlFolder="C:\\models\\Folder2" ExcelPath="C:\\models\\Path.xlsx" CheckLinks="true" />       
    
    </Model>
    
    </AutomatedRun>
    `;
    await writeFilePro(
      "C:\\ProgramData\\Autodesk\\AIT\\Model Checker\\2023\\Automated Runs\\att.xml",
      xml
    );
  } catch (err) {
    console.log("error creating XML", err);
  }
}
module.exports = writeAutomation;

// XML to write

// Write XML to file
