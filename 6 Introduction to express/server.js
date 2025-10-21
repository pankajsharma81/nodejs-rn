const express = require("express");

const app = express();

app.use("/user/:id", (req, res) => {
  const {id} = req.params;
  res.send("user :"+ id);
});

app.use("/about", (req, res) => {
  res.send("About route");
});

app.use("/", (req, res) => {
  res.send("Home route");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
