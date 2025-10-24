const express = require("express");
const app = express();

app.use(express.json());

const FoodMenu = [
  { id: 1, food: "Chowmein", category: "veg", price: 500 },
  { id: 2, food: "Butter Naan", category: "veg", price: 500 },
  { id: 3, food: "Chicken", category: "non-veg", price: 500 },
  { id: 4, food: "Mutton", category: "non-veg", price: 500 },
  { id: 5, food: "Momo", category: "veg", price: 500 },
  { id: 6, food: "Chai", category: "veg", price: 500 },
  { id: 7, food: "Rajma", category: "veg", price: 500 },
  { id: 8, food: "Roti", category: "veg", price: 500 },
  { id: 9, food: "Lolipop", category: "veg", price: 500 },
  { id: 10, food: "Kebab", category: "veg", price: 500 },
  { id: 11, food: "paneer", category: "veg", price: 500 },
  { id: 12, food: "Egg Curry", category: "veg", price: 500 },
  { id: 13, food: "salad", category: "veg", price: 500 },
];

const AddToCart = [];

// Authenticate admin here
app.use("/admin", (req, res, next) => {
  // Authentication karna padega ki kya ye admin hi hai
  const token = "abcdef";
  const Access = token === "abcdef" ? 1 : 0;

  if (!Access) {
    return res.status(403).json({
      message: "No permission",
    });
  }

  next();
});


app.get("/food", (req, res) => {
  res.send(FoodMenu);
});

app.post("/admin", (req, res) => {
  const data = req.body;
  FoodMenu.push(data);

  res.status(201).json({
    message: "Data added Successfully",
  });
});

app.patch("/admin", (req, res) => {
  const id = parseInt(req.body.id);

  const foodMenuUpdate = FoodMenu.find((food) => food.id === id);

  if (foodMenuUpdate) {
    if (req.body.food) {
      foodMenuUpdate.food = req.body.food;
    }
    if (req.body.category) {
      foodMenuUpdate.category = req.body.category;
    }
    if (req.body.price) {
      foodMenuUpdate.price = req.body.price;
    }
  }

  res.status(200).json({
    message: "data updated",
  });
});

app.delete("/admin/:id", (req, res) => {
  const id = req.params.id;

  const foodMenuDel = FoodMenu.findIndex((food) => food.id == id);
  FoodMenu.splice(foodMenuDel, 1);

  res.status(200).json({
    message: "data deleted",
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
