const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Kartik! Your DevOps journey starts here 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
