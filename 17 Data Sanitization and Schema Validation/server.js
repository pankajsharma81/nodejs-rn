const express = require("express");
require("dotenv").config();
const connectToDB = require("./src/db/db");
const userModel = require("./src/model/user.model");

const app = express();

app.use(express.json());
connectToDB();

app.post("/info", async (req, res) => {
  try {
    const doc = await userModel.create(req.body);
    res.send("Added!");
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

app.get("/info", async (req, res) => {
  try {
    const data = await userModel.find();
    res.json({
      data,
      message: "read",
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

app.delete("/info/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await userModel.findByIdAndDelete(id);
    res.send("deleted!");
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

app.patch("/info", async (req, res) => {
  try {
    const { _id, ...update } = req.body;
    await userModel.findByIdAndUpdate(_id, update, { runValidators: true });
    res.send("Update Successfully");
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
