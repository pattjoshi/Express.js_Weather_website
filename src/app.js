// requir express (CORES MODULES))
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// public path
app.use(express.static(path.join(__dirname, "../public")));

// routing
app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});
app.get("/about", (req, res) => {
  res.send("Hello from About Page");
});
app.get("/weather", (req, res) => {
  res.send("Hello from Weather Page");
});
app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
