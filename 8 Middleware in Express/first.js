const express = require("express");
const app = express();

app.use(
  "/book",
  (req, res, next) => {
    console.log("first");
    next();
    console.log("sixth");
  },
  (req, res, next) => {
    console.log("second");
    next();
    console.log("fifth");
  },
  (req, res) => {
    console.log("third");
    res.send("I am third");
    console.log("fourth");
  }
);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
