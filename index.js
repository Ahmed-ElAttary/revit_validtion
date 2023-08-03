require("dotenv").config();
const express = require("express");
const cors = require("cors");
const start = require("./start");
const writeAutomation = require("./writeAutomation");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  await writeAutomation();
  const pid = await start();

  res.send(pid);
});
// app.post("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, () => {
  console.log(`Server started on port ${port}🌍`);
});
