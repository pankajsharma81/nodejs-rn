const express = require("express");
require("dotenv").config();
const connectToDB = require("./src/db/db");
const userModel = require("./src/models/user.model");

const app = express();
connectToDB();

app.use(express.json());

app.post("/user", async (req, res) => {
  const { username, password } = req.body;

  await userModel.create({
    username,
    password,
  });

  res.status(201).json({
    message: "added new user",
  });
});

app.get("/user", async (req, res) => {
  const user = await userModel.find();

  res.status(200).json({
    user,
  });
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  await userModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "deleted",
  });
});

app.patch("/user/:id", async (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;

  const data = await userModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      username: username,
      password: password,
    }
  );
  res.status(200).json({
    data,
    message: "updated successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
