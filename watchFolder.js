const fs = require("fs"),
  path = require("path");
 function watchFile(name,onDelete) {
  const filepath = `C:\\\\ProgramData\\Autodesk\\AIT\\Model Checker\\2023\\Automated Runs\\${name}.xml`;

  const filedir = path.dirname(filepath);
  const filename = path.basename(filepath);
  fs.watch(filedir, function (event, who) {
    if (event === "rename" && who === filename) {
      if (fs.existsSync(filepath)) {
console.log("create")
      } else {
     onDelete();
     
      }
    }
  });
}
module.exports = watchFile;
