require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const start = require("./start");
const writeAutomation = require("./writeAutomation");
const checkReport = require("./checkReport");
const watchFile = require("./watchFolder");
const kill = require("./kill");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.post("/", async (req, res) => {
  const { filePath, id } = req.body;
  const folderPath = path.dirname(filePath);
  const reportPath = path.join(folderPath, "report");
  await writeAutomation(filePath, reportPath, id);
  const pid = await start();
  watchFile(id, () => {
    kill(pid);
    res.send("finished");
  });
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const report = await checkReport(id);
  res.send(report);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}🌍`);
});
