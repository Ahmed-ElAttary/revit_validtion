require("dotenv").config();
const express = require("express");
const cors = require("cors");
const start = require("./start");
const writeAutomation = require("./writeAutomation");
const checkReport = require("./checkReport");
const watchFolder = require("./watchFolder");
const kill = require("./kill");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  const { filePath } = req.body;
  const folderPath = path.dirname(filePath);
  const reportPath = path.join(folderPath, "report");
  const fileExist = await checkReport(path.join(reportPath, "report.xlsx"));
  if (fileExist == "not exist") {
    await writeAutomation(filePath, reportPath);
    const pid = await start();
    await watchFolder(reportPath, kill.bind(pid));
    res.send("done");
  }
});
// app.post("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, () => {
  console.log(`Server started on port ${port}🌍`);
});
